import { NextResponse } from "next/server";
import pool from "../../../../helper/db";

export async function GET(request, { params }) {
  const { email } = params;
  try {
    const db = await pool.getConnection();
    const [result] = await db.execute("SELECT * from user WHERE email = ?", [
      email,
    ]);
    const [adminResult] = await db.execute(
      "SELECT * from user WHERE email = ?",
      [process.env.ADMIN_EMAIL]
    );
    return NextResponse.json({
      message: "successful",
      success: true,
      events: result[0].events,
      adminEvents: adminResult[0].events,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ message: "error", success: false });
  }
}

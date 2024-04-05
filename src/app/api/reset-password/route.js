import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "../../../helper/db";
export async function POST(request) {
  const { id, password } = await request.json();
  const db = await pool.getConnection();
  try {
    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.BCRYPT_SALT)
    );
    //fetch user by email id
    const [rows] = await db.execute(
      "UPDATE user SET password = ? WHERE id = ?",
      [hashedPassword, id]
    );

    const response = NextResponse.json({
      message: "Password Changed",
      success: true,
    });
    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: "Unable to Change Password",
        success: false,
      },
      { status: 500 }
    );
  }
}

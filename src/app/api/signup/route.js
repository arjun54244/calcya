import { NextResponse } from "next/server";
import pool from "../../../helper/db";
import bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid";

export async function POST(request) {
  const { name, email, password } = await request.json();
  const hashedPassword = await bcrypt.hash(
    password,
    parseInt(process.env.BCRYPT_SALT)
  );
  const db = await pool.getConnection();
  try {
    //create unique id
    const unique_id = uuid();
    const [rows] = await db.execute("SELECT * FROM user WHERE email = ?", [
      email,
    ]);
    if (rows.length !== 0) {
      return NextResponse.json({
        message: "User Already Exists!",
        status: false,
      });
    }
    const response = await db.execute(
      "INSERT INTO user (id, name, email, password) VALUES (?, ?, ?, ?)",
      [unique_id, name, email, hashedPassword]
    );
    return NextResponse.json({
      message: "User Registered Successfully",
      status: true,
    });
  } catch (error) {
    return NextResponse.json({ message: "Unable to Sign in", status: false });
  }
}

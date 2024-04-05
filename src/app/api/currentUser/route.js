import pool from "../../../helper/db";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

//get current user based on the jwt token saved in the cookies
export async function GET(request) {
  const authToken = request.cookies.get("authToken")?.value;
  const data = jwt.verify(authToken, process.env.JWT_KEY);
  const db = await pool.getConnection();
  const [rows] = await db.execute("SELECT * FROM user WHERE email = ?", [
    data.email,
  ]);
  return NextResponse.json(rows[0]);
}

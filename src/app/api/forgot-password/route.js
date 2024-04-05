import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import pool from "../../../helper/db";
import nodemailer from "nodemailer";
export async function POST(request) {
  const { email } = await request.json();
  const db = await pool.getConnection();
  //fetch user by email id
  const [rows] = await db.execute("SELECT * FROM user WHERE email = ?", [
    email,
  ]);
  if (rows.length === 0) {
    return NextResponse.json({
      message: "User Doesn't Exist",
      success: false,
    });
  }

  const user = rows[0];
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign({ id: user.id }, secret, {
    expiresIn: "1d",
  });
  const link = `http://localhost:3000/reset-password/${token}`;

  //nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });
  var mailOptions = {
    from: process.env.MY_EMAIL,
    to: user.email,
    subject: "Password Reset",
    text: link,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return NextResponse.json({
        message: `An error has occured`,
        success: false,
      });
    }
    return NextResponse.json({
      message: "Email sent succesfuly",
      success: true,
    });
  });
  return NextResponse.json({
    message: "Email Sent Successfully",
    success: true,
  });
}

import { NextResponse } from "next/server";
import pool from "../../../helper/db";
import nodemailer from "nodemailer";
export async function POST(request) {
  const { name, email, message } = await request.json();
  const db = await pool.getConnection();
  try {
    //fetch user by email id
    const [rows] = await db.execute(
      "INSERT INTO queries (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );

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
      to: "plksehgal@gmail.com",
      subject: "Enquiry Form",
      html: `<html><body><div><h3>Name</h3><p>${name}</p></div><div><h3>Email</h3><p>${email}</p></div><div><h3>Message</h3><p>${message}</p></div></body></html>`,
    };
    transporter.sendMail(mailOptions);
    return NextResponse.json({
      message: "Query Sent",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      message: "Failed to send Query",
      success: false,
    });
  }
}

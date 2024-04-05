import { NextResponse } from "next/server";
import pool from "../../../helper/db";
export async function POST(request) {
  const { currentEvents, email } = await request.json();
  console.log(currentEvents);
  try {
    const db = await pool.getConnection();
    const [result] = await db.execute(
      "UPDATE user SET events = ? WHERE email = ?",
      [JSON.stringify(currentEvents), email]
    );
    //     //fetch user by email id
    //     const [rows] = await db.execute("SELECT * FROM user WHERE email = ?", [
    //       email,
    //     ]);
    //     if (rows.length === 0) {
    //       NextResponse.json(
    //         {
    //           message: "User Doesn't Exist",
    //           success: false,
    //         },
    //         { status: 500 }
    //       );
    //     }
    //     const user = rows[0];
    //     const isPasswordMatch = await bcrypt.compare(password, user.password);
    //     if (!isPasswordMatch) {
    //       return NextResponse.json({
    //         message: "Invalid Password",
    //         success: false,
    //         //user: user,
    //       });
    //     }
    //     //creating token
    //     const token = jwt.sign(
    //       {
    //         email: user.email,
    //       },
    //       process.env.JWT_KEY
    //     );
    //     //create next-response cookie
    const response = NextResponse.json({
      message: "Success",
      success: true,
    });
    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      { status: 500 }
    );
  }
}

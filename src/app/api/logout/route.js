import { NextResponse } from "next/server";

export async function POST() {
  console.log("hello");
  const response = NextResponse.json({ message: "Logout", success: true });
  response.cookies.set("authToken", "", {
    expires: new Date(0),
  });
  return response;
}

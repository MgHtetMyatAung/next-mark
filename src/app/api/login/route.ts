import api from "@/services/api_config";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json("Bad request", { status: 400 });
    }
    const loginRes = await api.post("/auth/login", {
      email,
      password,
    });

    (await cookies()).set("authToken", loginRes.data.accessToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60,
      sameSite: "strict",
    });

    return NextResponse.json(loginRes.data, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connect();

// we get all the info from body
// hash the password
// save to db

export async function POST(request: NextRequest) {
  try {
    let reqBody = await request.json();
    console.log({ reqBody });

    let { username, email, password } = reqBody;
    //check if fields are present
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "All the fields are required" },
        { status: 400 }
      );
    }

    //check if user already exists

    let user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { message: "User already Exists!" },
        { status: 403 }
      );
    }

    //hashing password

    let salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    //save the user with new password

    let newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    let savedUser = await newUser.save();
    console.log({ savedUser });

    return NextResponse.json({
      message: "User Created Successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

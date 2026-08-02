import { NextResponse } from "next/server";

export async function GET() {
  const resumeUrl =
    process.env.NEXT_PUBLIC_RESUME_URL ||
    "https://drive.google.com/file/d/1yTPH9w4pZNk0NbNTAQ7tHS7rR0Q25mHQ/view?usp=sharing";

  return NextResponse.redirect(resumeUrl, { status: 307 });
}

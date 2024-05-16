import { createClient } from "../../utils/supabase/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { origin, searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  // if "next" is in param, use it as the redirect URL
  if (code) {
    const supabase = createClient();
    await supabase.auth.exchangeCodeForSession(code);
    return NextResponse.redirect(`${origin}/chat`);
  }
  // return the user to an error page with instructions
  return NextResponse.redirect(origin);
}

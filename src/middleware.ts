import { NextResponse } from "next/server";
import { updateSession } from "./helpers/session";

export async function middleware() {
    const upSession = await updateSession();

    if (!upSession) return;

    const res = NextResponse.next();
    res.cookies.set(upSession);
    return res;
}
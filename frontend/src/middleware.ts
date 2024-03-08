import { DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, authRoutes, categoryPagesPrefix, productPagesPrefix, publicRoutes } from "@/routes";
import { NextRequest, NextResponse } from "next/server";
import { fetchUser } from "./apiCalls/user";
import { useReducer } from "react";

export default async function middleware(req: NextRequest) {
    const { nextUrl } = req;
    console.log(nextUrl.pathname);

    return null;
}

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
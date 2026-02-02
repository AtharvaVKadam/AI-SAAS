import { polarClient } from "@polar-sh/better-auth/client";
import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_APP_URL, // distinct from your snippet, but usually required!
    plugins: [
        // Cast to 'any' to silence the strict type check mismatch
        polarClient() as any 
    ],
});
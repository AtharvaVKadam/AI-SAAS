import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db"; 
import * as schema from "@/db/schema";
import { polar, checkout, portal } from "@polar-sh/better-auth";
import { polarClient } from "./polar";


export const auth = betterAuth({

    baseURL: process.env.BETTER_AUTH_URL, 
    
    trustedOrigins: [
        process.env.NEXT_PUBLIC_APP_URL as string,
    ],
    plugins: [
        polar({
            client: polarClient,
            createCustomerOnSignUp: true,
            use: [
                checkout({
                    authenticatedUsersOnly: true,
                    successUrl: "/upgrade",
                }),
                portal(),
            ]
        }) as any,
    ],
    
    socialProviders: {
        ...(process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET && {
            github: { 
                clientId: process.env.GITHUB_CLIENT_ID, 
                clientSecret: process.env.GITHUB_CLIENT_SECRET, 
            },
        }),
        ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET && {
            google: { 
                clientId: process.env.GOOGLE_CLIENT_ID, 
                clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
            },
        }),
    },

    emailAndPassword: {
        enabled: true,
    },
    database: drizzleAdapter(db, {
        provider: "pg", 
        schema: {
            ...schema},
    }),
});
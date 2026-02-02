import { NextResponse } from "next/server";
import { db } from "@/db";
import { sql } from "drizzle-orm";

export async function GET() {
    try {
        // Run a simple query to reset the 5-minute timer
        await db.execute(sql`SELECT 1`);
        console.log("⏰ Database pinged to stay awake");
        return NextResponse.json({ status: "Awake" });
    } catch (error) {
        return NextResponse.json({ status: "Error", error }, { status: 500 });
    }
}
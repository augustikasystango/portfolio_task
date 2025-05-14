import { NextRequest, NextResponse } from "next/server";
import { URL } from "url";

export async function GET(req: NextRequest) {


    try {
        const url = new URL(req.url);
        const id = url.pathname.split("/").pop(); // safely gets last segment as ID

        if (!id) {
            return NextResponse.json({ message: "ID is missing" }, { status: 400 });
        }
        
        const res = await fetch(`${process.env.NEXTBASE_URL}/${id}`);

        if (!res.ok) {
            return NextResponse.json({ message: "Invalid url" }, { status: 500 });
        }

        const portfolio = await res.json();
        console.log(portfolio, "---");

        return NextResponse.json({ portfolio }, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Error in fetching portfolio of this user" }, { status: 500 });
    }
}


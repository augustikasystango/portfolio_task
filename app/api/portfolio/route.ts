import { NextRequest,NextResponse } from "next/server";

export async function GET( req : NextRequest)
{
  try{
    const res = await fetch(`${process.env.NEXTBASE_URL}`);
    if(!res.ok)
    {
       return NextResponse.json({message:"Invalid url"},{status:500})
    }
    const portfolios = await res.json();
    console.log(portfolios,"---12");
    return NextResponse.json({portfolios},{status:200});

  }catch(error)
  {
    return NextResponse.json({message:"Error in fetching portfolios"},{status:500});
  }
}


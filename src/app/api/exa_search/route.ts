import { NextResponse } from "next/server";
import Exa from "exa-js";

const exa = new Exa(process.env.EXA_API_KEY);
export async function POST(req: Request){
    try {
        const {query} = await req.json();
        const searchResults = await exa.answer(query, {
            includeText: true,
            expandedQueriesLimit: 2,
            
          });
        return NextResponse.json(searchResults);
    } catch (error) {
        console.error('Search error:', error);
        return NextResponse.json(
            { error: 'Failed to perform search' },
            { status: 500 }
        );
    }
}
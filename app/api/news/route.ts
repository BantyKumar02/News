import { NextResponse } from "next/server";

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2/everything";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  source: { name: string };
}

interface SuccessResponse {
  status: "ok";
  articles: Article[];
}

interface ErrorResponse {
  status: "error";
  message: string;
}

type NewsResponse = SuccessResponse | ErrorResponse;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || "latest";

  try {
    const response = await fetch(`${BASE_URL}?q=${query}&language=en&apiKey=${API_KEY}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.statusText}`);
    }

    const data: NewsResponse = await response.json();

    if (data.status === "error") {
      return NextResponse.json({ error: data.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching news:", error.message || error);
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
  }
}

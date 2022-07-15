import { NextRequest, NextFetchEvent, NextResponse } from "next/server";

const people = new Array(20).fill(1).map((_, i) => {
  return {
    id: Date.now() + i,
    title: `Person-${i}`,
  };
});

export default people;

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  event.waitUntil(
    fetch("https://", {
      method: "GET",
      body: JSON.stringify({ pathname: req.nextUrl.pathname }),
    })
  );

  return NextResponse.next();
}

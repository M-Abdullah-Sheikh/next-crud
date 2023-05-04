import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

  return NextResponse.json({
    From: "Abdullah",
    Message: "Greetings from Pakistan",
    RequestType: "GET"
  });
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  if (req.name) {
    return NextResponse.json({
      To: "Abdullah",
      Message: "All well here",
      RequestType: "POST"
    });
  }
  else {
    return new NextResponse("Please include your name in the POST request");
  }
}

export async function PUT(request: NextResponse) {
  const req = await request.json();
  if (req.name) {
    return NextResponse.json({
      To: "Abdullah",
      Message: "This is a updated Greetings",
      RequestType: "PUT"
    });
  }
  else {
    return new NextResponse("Please include your name in PUT Request");
  }
}

export async function name(request: NextResponse) {
  const req = await request.json();
  if (req.name) {
    return NextResponse.json({
      To: "Abdullah",
      Message: "I have deleted the greetings",
      RequestType: "DELETE"
    });
  }

  else {
    return new NextResponse("Please include your name in DELETE Request")
  }
}
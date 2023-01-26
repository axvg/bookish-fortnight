import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export default (req: NextRequest) => {
  return NextResponse.json({
    ok: true,
    data: [
      {
        id: 1,
        name: "foo",
      },
      {
        id: 2,
        name: "bar",
      },
    ],
  });
};

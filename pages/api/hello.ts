// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export default (req: NextRequest) => {
  return NextResponse.json({
    message: `Hello world ${req.url}`,
  });
};

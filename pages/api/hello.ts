// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export default (req: NextRequest) => {
  return NextResponse.json({
    message: `Hello world ${req.url}`,
  });
};

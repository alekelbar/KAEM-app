// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

type Data = {
  msg: string
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const session = await getSession({ req });
  if (!session) return res.status(403).send({ msg: "Session not found" });


  res.status(200).json({ msg: 'John Doe' })
}

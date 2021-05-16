// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  date: string
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const date = new Date()

  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

  res.status(200).json({ date: date.toUTCString() })
}

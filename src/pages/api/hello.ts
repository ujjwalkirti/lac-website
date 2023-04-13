// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  cards:any,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
      cards : [
      {
        "img": "https://links.papareact.com/2io",
        "title": "Outdoor getaways"
      },
      {
        "img": "https://links.papareact.com/q7j",
        "title": "Unique stays"
      },
      {
        "img": "https://links.papareact.com/s03",
        "title": "Entire homes"
      },
      {
        "img": "https://links.papareact.com/8ix",
        "title": "Pet allowed"
      }
    ],
  })
}

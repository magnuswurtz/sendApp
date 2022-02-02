// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Route = {
  date:Date;
  routeName:string;
  section:string;
  area:string;
  country:string;
  grade:string;
  comments:string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Route>
) {
  res.status(200).json({date:new Date(),routeName:"routename",section:"sect",area:"area",country:"country",grade:"7A",comments:"Very easy"})
}


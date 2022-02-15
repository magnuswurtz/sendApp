// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import db from "../../../data/climbing-data.json"
import {Route} from "../../../shared"

//Controller function - returns array of routes for a given climber
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
    if(req.method == "GET"){
        res.status(200).json(getClimbers())
    }
}

//Model function - fetch from database
const getClimbers = ():string[] => {
    const out = new Set<string>()
    db.forEach(send => out.add(send.Climber))
    return Array.from(out);
}
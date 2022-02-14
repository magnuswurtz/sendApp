// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
import db from "../../../../data/climbing-data.json"
import {Route} from "../../../../shared"

//Controller function - returns array of routes for a given climber
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Route[]>
) {
    if(req.method == "GET"){
        const {climberID} = req.query
        const fetchedClimber = getClimber(climberID)
        res.status(200).json(fetchedClimber)
    }
}

//Model function - fetch from database
const getClimber = (climberID:string | string[]):Route[] => {
    const climber = climberID.toString() //assert that it's a string
    const routes = db.filter(send => send.Climber == climber)
    return routes;
}
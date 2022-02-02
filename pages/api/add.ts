import type { NextApiRequest, NextApiResponse } from 'next'

interface Route {
  date:Date;
  routeName:string;
  section:string;
  area:string;
  country:string;
  grade:string;
  comments:string;
}

export default async function handler(  
    req: NextApiRequest,
    res: NextApiResponse) {

  const route = req.body
  try {
    await handleFormInputAsync(route)
    res.status(200).send("Route added")
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}

const handleFormInputAsync = (route:Route) => {
    console.log("Received from client")
    console.log(route);
}
import { Router } from "next/router";
import { EventHandler, MouseEventHandler, useCallback, useState } from "react";
import { Route } from "../shared"
import SortingButton from "./SortingButton";
import TableRow from "./TableRow";

type ListProps = {
routes:Route[];
climber:string;
}

type SortKey = keyof Route

type SortOrder = "asc" | "desc"

const sortRoutes = (data:Route[],sortKey:SortKey,reverse:boolean) => {
    const sortedRoutes = data.sort((a,b) => {
        return a[sortKey] < b[sortKey] ? -1 : 1
    })
    if(reverse) return sortedRoutes.reverse()
    return sortedRoutes;
}

const StatsList = (props:ListProps) => {
    const headlines:SortKey[] = ["Name","Grade","Type","Height","Sector","Region","Country","Buddy","Year","Month","Pitches","Pitches_completed"]
    const [sortKey,setSortKey] = useState<SortKey>("Name");
    const [sortOrder,setSortOrder] = useState<SortOrder>("asc");

    const sortedData = useCallback(() => sortRoutes(props.routes,sortKey,sortOrder === "desc") //Reverse if sortOrder is descending
    ,[props.routes,sortKey,sortOrder])

    const changeSorting = (sortKey:SortKey) => {
        setSortKey(sortKey);
        setSortOrder(sortOrder==="asc" ? "desc" : "asc") //set opposite of whatever it is now
    }
    return(
    <table>
      <caption>{props.climber}'s Sends</caption>
      <thead>
        <tr>
        {headlines.map((hd) => <th className="text-left m-2 pr-4">{hd}<SortingButton columnHeader={hd} sortKey={sortKey} sortOrder ={sortOrder} onClick={() => changeSorting(hd)}/></th>)}
        </tr>
      </thead>
      <tbody>
        {sortedData().map(route => (
            <TableRow route={route}></TableRow>
        ))}
      </tbody>
    </table>
    )
}
export default StatsList

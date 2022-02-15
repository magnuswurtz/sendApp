import { Route } from "../shared";

type RowProps = {
    route:Route
}
const TableRow = (props:RowProps) => {
    const route = props.route;
    const showRouteCard = () => {
        alert(route.Name+"was clicked")
    }
    return(
        
        <tr onClick={showRouteCard} className="border m-2 p-2 hover:bg-violet-400 cursor-pointer" key={route.Name+route.Grade}>
            <td>{route.Name}</td>
            <td>{route.Grade}</td>
            <td>{route.Type}</td>
            <td>{route.Height == 0 ? "" : route.Height}</td>
            <td>{route.Sector}</td>
            <td>{route.Region}</td>
            <td>{route.Country}</td>
            <td>{route.Buddy}</td>
            <td>{route.Year}</td>
            <td>{route.Month}</td>
            <td>{route.Pitches}</td>
            <td>{route.Pitches_completed}</td>
        </tr>
    )
}

export default TableRow;
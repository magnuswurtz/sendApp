import Button from "../components/Button"
import StatsNav from "../components/StatsNav"
import { useEffect, useState } from "react"
import StatsList from "../components/StatsList"
import { Route } from "../shared"
import StatsMap from "../components/StatsMap"
import StatsPlots from "../components/StatsPlots"


const Statistics = () => {
    const [content,setContent] = useState("List");
    const CLIMBERID = "Mark"; //Should be read from some cookie when authentication is done
    const [routes, setRoutes] = useState<Route[]>([]);


    const renderSwitch = (param:string)  => {
        switch(param) {
            case 'Plots':
                return <StatsPlots routes = {routes}/>;
            case 'Map':
                return <StatsMap/>
            default:
                return <StatsList/>;
        }
      }

      useEffect(() => { //Fetch data for climber when
        fetch(`api/statistics/climbers/${CLIMBERID}`)
          .then((res) => res.json())
          .then((data) => {
            setRoutes(data)
            
        })
      }, [])
    return(
        <div>
            <h1 className='headline'>Statistics page</h1>

            <StatsNav setContent={setContent}></StatsNav>
            {renderSwitch(content)}
            <Button text="Go Back" link="/"></Button>
            
        </div>
    )
}
export default Statistics
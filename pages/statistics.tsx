import Button from "../components/Button"
import StatsNav from "../components/StatsNav"
import { useEffect, useState } from "react"
import StatsList from "../components/StatsList"
import { Route } from "../shared"
import StatsMap from "../components/StatsMap"
import StatsPlots from "../components/StatsPlots"
import { BallTriangle } from "react-loader-spinner"

const Statistics = () => {
    const [content,setContent] = useState("List");
    const CLIMBERID = "Mark"; //Should be read from some cookie when authentication is done
    const [routes, setRoutes] = useState<Route[]>([]);
    const [loaded,setLoaded] = useState(false);


    const renderSwitch = (param:string)  => {
        switch(param) {
            case 'Plots':
                return <StatsPlots routes = {routes}/>;
            case 'Map':
                return <StatsMap/>
            default:
                return <StatsList climber = {CLIMBERID} routes = {routes}/>;
        }
      }

      useEffect(() => { //Fetch data for climber when
        fetch(`api/statistics/climbers/${CLIMBERID}`)
          .then((res) => res.json())
          .then((data) => {
            setRoutes(data);
            setLoaded(true);
        })
      }, [])
    return(
       
        <div>
            <h1 className='headline'>Statistics page</h1>
            <StatsNav setContent={setContent}></StatsNav>
            <div id="content" className="flex border justify-center">
                
                {!loaded ? 
                <BallTriangle color="#00BFFF" height={300} width={300} /> :
                renderSwitch(content)
            }
            </div>
            
            <Button text="Go Back" link="/"></Button>
            
        </div>
        
    )
}
export default Statistics
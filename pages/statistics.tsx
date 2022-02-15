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
    const [climber,setClimber] = useState("Mark")
    const [climbers,setClimbers] = useState([]);
    const [routes, setRoutes] = useState<Route[]>([]);
    const [loaded,setLoaded] = useState(false);


    const renderSwitch = (param:string)  => {
        switch(param) {
            case 'Plots':
                return <StatsPlots routes = {routes}/>;
            case 'Map':
                return <StatsMap/>
            default:
                return <StatsList climber = {climber} routes = {routes}/>;
        }
      }

      useEffect(() => { //Fetch data for climber when
        fetch(`api/statistics/climbers/${climber}`)
          .then((res) => res.json())
          .then((data) => {
            setRoutes(data);
            setLoaded(true);
        })
      }, [climber])

      useEffect(() => { //Fetch climbers in db for select field
        fetch("api/statistics/climbers")
          .then((res) => res.json())
          .then((data) => {
            setClimbers(data);
        })
      }, [])


    const changeSelectedClimber = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setClimber(event.target.value)
    }
    return(
       
        <div>
            <h1 className='headline'>Statistics</h1>
            <StatsNav setContent={setContent}></StatsNav>

            <select className="border" onChange={changeSelectedClimber}>
                {climbers.map(cl => 
                cl === climber ? <option selected value={cl}>{cl}</option>: <option value={cl}>{cl}</option>)   
            }
            </select>
            <div id="content" className="flex border justify-center flex-col">

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
import Button from "../components/Button"
import StatsNav from "../components/StatsNav"
import { useState } from "react"
import StatsList from "../components/StatsList"

const Statistics = () => {
    const [content,setContent] = useState("List");

    const renderSwitch = (param:string)  => {
        switch(param) {
            case 'Plots':
                return <div>Plots</div>;
            case 'Map':
                return <div>Map</div>
            default:
                return <StatsList/>;
        }
      }
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
import { useState } from "react"

interface navProps{
    setContent:(content:string) => void
}

const StatsNav = (props:navProps) => {
  const [activeButton,setActiveButton] = useState("List");

  const handleClick = (title:string) => {
    props.setContent(title);
    setActiveButton(title);
  }
    return(
      <nav className="flex sm:justify-center space-x-4">
        <button title="List" className={`rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 ${activeButton=="List"? "active" :""}`} onClick={() => handleClick("List")}>List</button>
        <button title="Map" className={`rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 ${activeButton=="Map"? "active" :""}`} onClick={() => handleClick("Map")}>Map</button>
        <button title="Plots" className={`rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 ${activeButton=="Plots"? "active" :""}`} onClick={() => handleClick("Plots")}>Plots</button>
      </nav>
    )
}
export default StatsNav
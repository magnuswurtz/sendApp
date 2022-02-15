import { useState } from "react";
import { Pie, PieChart } from "recharts";
import { Route } from "../shared";

type StatsProps = {
    routes:Route[];
} 

const StatsPlots = (props:StatsProps) => {
    const [total,setTotal] = useState();
    const [gradeCount,setGradeCount] = useState();
    
    const countBy = (list:Route[]) =>{
        const count = list.reduce((accumulator, route) => {
            if(!accumulator[route.Grade]) accumulator[route.Grade] = 1;
            else accumulator[route.Grade]++; 
            return accumulator},{} as any)

        const out = []
        for (const [key, value] of Object.entries(count))
            out.push({"grade":key,"number":value})
        
        return out;
    }
    return(
        <div>
            <PieChart className="border" width={200} height={250}>
                {/*FIX:routes er undefined hvis det ikke bliver fetchet inden det sendes videre */}
                <Pie data={countBy(props.routes)} dataKey="number" nameKey="grade" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" label />
            </PieChart>
        </div>
    )
}

export default StatsPlots
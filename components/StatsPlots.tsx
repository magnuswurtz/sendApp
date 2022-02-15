import { getSortedRoutes } from "next/dist/shared/lib/router/utils";
import { useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";
import { Route } from "../shared";
import PlotSection from "./PlotSection";

type StatsProps = {
    routes:Route[];
} 
type CountKey = keyof Route

const StatsPlots = (props:StatsProps) => {
    const countByKey = (list:Route[],countKey:CountKey) =>{
        const count = list.reduce((accumulator, route) => {
            if(!accumulator[route[countKey]]) accumulator[route[countKey]] = 1;
            else accumulator[route[countKey]]++; 
            return accumulator},{} as any) //Find out how to fix this with a proper type instead
        const out = []
        for (const [key, value] of Object.entries(count))
            out.push({countKey:key,"routes":value})
        return out;
    }
    const byMonth = (list:Route[]) =>{
        const count = list.reduce((accumulator, route) => {
            if(!accumulator.has(route.Month)) accumulator.set(route.Month,1);
            else accumulator.set(route.Month,accumulator.get(route.Month)+1); 
            return accumulator},new Map<string,any>()) //Find out how to fix this with a proper type instead
        const order = ["Januar","Februar","Marts", "April", "Maj","Juni","Juli","August","September","Oktober","November","December"]
        const out = order.map(month => {
            if (count.has(month)) return {countKey:month,routes:count.get(month)}
            else return {countKey:month,routes:0}
        })
        return out;
    }
    console.log(byMonth(props.routes))
    return(
        <div className="flex flex-wrap justify-center">
            <PlotSection HeaderText="By Grade">
                <PieChart  width={400} height={400}>
                    <Pie data={countByKey(props.routes,"Grade")} dataKey="routes" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" label={({index})=> countByKey(props.routes,"Grade")[index].countKey}/>
                </PieChart>
            </PlotSection >

            <PlotSection HeaderText="By Country">
                <BarChart width={730} height={250} data={countByKey(props.routes,"Country")}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="countKey"/>
                    <YAxis dataKey="routes"/>
                    <Bar dataKey="routes" fill="#3284d8" />
                </BarChart>
            </PlotSection>
            <PlotSection HeaderText="By Month">
                <LineChart width={1000} height={250} data={byMonth(props.routes)}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="countKey"/>
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="routes" stroke="#82ca9d" />
                </LineChart>
            </PlotSection>
        </div>
    )
}

export default StatsPlots
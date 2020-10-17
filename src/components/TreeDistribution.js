import React from "react";
import {AreaChart, Area, YAxis, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {prepareDataTree} from "./FixData";

export default function TreeDistribution() {

    return (
        <ResponsiveContainer width={500} height={250}>
             <AreaChart data={prepareDataTree()}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv">
                        <stop offset="5%" stopColor="#108FAF" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#108FAF" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="Year" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="Planted" stroke="#108FAF" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>           
        </ResponsiveContainer>
    )
} 
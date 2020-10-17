import React from "react";
import {AreaChart, Area, YAxis, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import callApi  from './CallApi'
import {prepareData} from './FixData'

export default function HumidityWind() {

    const dataMap = callApi();
    return (
        <ResponsiveContainer width={500} height={250}>
             <AreaChart data={dataMap === null ? console.log("not ready"): prepareData({dataMap},2)}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#108FAF" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#108FAF" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#385F61" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#385F61" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="Time" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="Humidity (%)" stroke="#108FAF" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="Wind (m/s)" stroke="#385F61" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>           
        </ResponsiveContainer>
    )
}
import React, {useContext, Component, useEffect, useState} from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend, Bar, ResponsiveContainer, ComposedChart } from 'recharts';
import CallApi from './CallApi'
import prepareData from "./FixData";

export default function TemperatureChart() {

    const dataMap = CallApi()
    return (
        <ResponsiveContainer width={500} height={250}>
            <ComposedChart
            data = {dataMap === null ? console.log("not ready"): prepareData({dataMap},1)}
            margin = {{top:5, right: 20, bottom: 5, left: 0}}>
                <Bar dataKey='Temperature C°' barSize={14} fill='#20436D' />
                <CartesianGrid stroke='#ccc' strokeDasharray='8'/>
                <XAxis dataKey='time'/>
                <Legend verticalAlign='bottom' height={36}/>
                <YAxis/>
                <Tooltip/>
            </ComposedChart>           
        </ResponsiveContainer>
    )
}

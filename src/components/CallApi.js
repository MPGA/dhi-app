import React, {useContext, Component, useEffect, useState} from "react";

export default function CallApi(){

const [dataMap, setdataMap] = useState(null)
const getData = () => fetch("https://api.met.no/weatherapi/locationforecast/2.0/complete?altitude=0&lat=55.690507&lon=12.587300").then((res) => res.json())
useEffect(()=> {getData().then((data) => setdataMap(data))},[])

return dataMap
}

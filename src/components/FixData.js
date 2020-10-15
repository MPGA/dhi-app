export default function prepareData(dataMap, option){
    const array = dataMap.dataMap.properties.timeseries;
    var i;
    var result = [];
    for (i = 0; i < array.length; i++){
        if(array[i].time.includes("T00")){
            if(option == 1){
                var obj = {"Temperature C°": array[i].data.instant.details.air_temperature, "time": "Hour: "+array[i].time.slice(8,10)};
                result.push(obj)
            }
            else if (option == 2){
                var obj = {"Humidity (%)": array[i].data.instant.details.relative_humidity, "Time": "Hour: "+array[i].time.slice(8,10), "Wind (m/s)": array[i].data.instant.details.wind_speed};
                result.push(obj)
            }
        }
    }
    return result;
}
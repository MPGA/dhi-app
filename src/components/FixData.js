export default function prepareData(dataMap, option){
    const array = dataMap.dataMap.properties.timeseries;
    const today = dataMap.dataMap.properties.meta.updated_at.slice(0,10); 
    var i;
    var result = [];
    for (i = 0; i < array.length; i++){
        if(array[i].time.includes("T00")){
            if(option == 1){
                var obj = {"Temperature C°": array[i].data.instant.details.air_temperature, "time": "Hour: "+array[i].time.slice(11,13)};
                result.push(obj)
            }
            else if (option == 2){
                var obj = {"Humidity (%)": array[i].data.instant.details.relative_humidity, "Time": "Hour: "+array[i].time.slice(11,13), "Wind (m/s)": array[i].data.instant.details.wind_speed};
                result.push(obj)
            }
        }
    }
    return result;
}
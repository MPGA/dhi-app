import * as tree from "../Data/cph_trees.json";

export default function prepareData(dataMap, option){
    const array = dataMap.dataMap.properties.timeseries;
    const today = dataMap.dataMap.properties.meta.updated_at.slice(0,10); 
    var tomorrow;
    var i;
    var date = new Date();
    var count = 0;
    var result = [];
    for (i = 0; i < array.length; i++){
        if(array[i].time.includes(date.getDate()+"T")){
            count = count + 1;
        }
    }
    if(count < 4)
    {
        tomorrow = String(date.getDate() + 1) + "T";
    }
    for (i = 0; i < array.length; i++){
        if(array[i].time.includes(today) || array[i].time.includes(tomorrow)){
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

export function prepareDataTree(){
    var i;
    var data = [];
    for (i = 0; i < tree.features.length; i++){
        if(data.filter(obj => obj.Year === tree.features[i].properties.planteaar).length > 0){
            var index = data.findIndex(o=> o.Year === tree.features[i].properties.planteaar)
            data[index].Planted = data[index].Planted + 1;
        }
        else {
            var year = tree.features[i].properties.planteaar
            var obj = {"Year": year, "Planted":1}
            data.push(obj);   

        }
    }

    return data;
}
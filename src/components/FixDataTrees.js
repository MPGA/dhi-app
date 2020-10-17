export default function prepareData(dataMap, option){
    const array = dataMap.dataMap.properties.planteaar; 
    const years = dataMap.dataMap.properties.dansk_navn; 
    var i;
    var result = [];
    
    var occurences = array.reduce(function (r, row) {
        r[row.planteaar] = ++r[row.planteaar] || 1;
        return r;
    }, {});
    
    var result = Object.keys(occurences).map(function (key) {
        return { key: key, value: occurences[key] };
    });

    return result;
}




const displayRate = (rate) => {
    var result = rate.toFixed(2);
    const resultString = rate.toFixed(2);
    const length = result.length;
    if(resultString[length-1]==="0" && resultString[length-2]==="0"){
        result = rate.toFixed(1);
    }
    return result;
}

export default displayRate

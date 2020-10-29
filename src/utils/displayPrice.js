
const displayPrice = (price) => {
    var result = price.toFixed(2);
    const resultString = price.toFixed(2);
    const length = result.length;
    if(resultString[length-1]==="0" && resultString[length-2]==="0"){
        result = price.toFixed(0);
    }
    return result;
}

export default displayPrice

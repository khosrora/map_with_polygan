
// function convertLatLngArray(inputArray) {
//     let array = [];
//     array = inputArray.map(obj => [obj.lng, obj.lat]);
//     const len = array.length;
//     array[len - 1] = array[0];
//     return array;
// }

// export { convertLatLngArray }

function convertLatLngArray(inputArray) {
    let array = [];
    array = inputArray.map(obj => [obj.lng, obj.lat]);
    const len = array.length;
    array[len] = array[0];
    return array;
}

export { convertLatLngArray }
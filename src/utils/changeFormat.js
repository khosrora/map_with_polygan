
function convertLatLngArray(inputArray) {
    return inputArray.map(obj => [obj.lng, obj.lat]);
}

export { convertLatLngArray }
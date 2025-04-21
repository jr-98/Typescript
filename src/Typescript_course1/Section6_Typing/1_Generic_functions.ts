//Normal function
function showData(data: string): string {
    return `His name es ${data}`
}
console.log(showData('Jonathan Tillaguango'))

//generic Fn

function showGenericData<T>(data: T): T {
    return data
}

console.log(showGenericData('Jonathan'))
console.log(showGenericData(true))
console.log(showGenericData([1, "data"]))
console.log(showGenericData(23))
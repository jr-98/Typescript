function addition(a: number, b: number): number {
    return a + b
}
//Functions without params
function void_function(): void {
    console.log('This is a function without params')
}

// #region Call functions 
const price: number = addition(4, 6)
console.log(price)

void_function()
// #endregion
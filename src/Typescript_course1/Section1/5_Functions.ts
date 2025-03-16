function addition(a: number, b: number): number {
    return a + b
}
//Functions without params
function void_function(): void {
    console.log('This is a function without params')
}
const handle_fn = (): void => console.log('This is an arrow function without params')
const greeting = (nameusr: string): string => { return 'Hello' + nameusr }
// #region Call functions 
const price: number = addition(4, 6)
console.log(price)
void_function()
handle_fn()
console.log(greeting('Jonathan'))
// #endregion
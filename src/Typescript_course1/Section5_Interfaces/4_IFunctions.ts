interface ShowFn {
    (name: string, lastmane: string, age: number): void
}
let showNameFn: ShowFn = function (name: string, lastmane: string, age: number): void {
    console.log(`${name} ${lastmane} ${age}`)

}
showNameFn('jonathan', 'tillaguango', 34)
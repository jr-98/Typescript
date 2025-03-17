function fibbonacci(custom?: number): void {
    if (custom) {
        console.log('The  fibbonassi series is\n', custom)
        return
    }
    console.log('The  fibbonassi series is\n', 6)

}
fibbonacci()
fibbonacci(10)
class Car {
    brand: string
    tires: number
    dors: number
    type: string
    // constructor
    constructor(brand: string, tires: number, dors: number, type: string) {
        this.brand = brand
        this.tires = tires
        this.dors = dors
        this.type = type
    }
    // methods
    acceleration(): void {
        console.log("Run run")
    }
    breaking(): void {
        console.log("I'm stopping")
    }
    engineMotor(): void {
        console.log("Shuuuk Shuuuuk runnnnn rummmmmmmmmmmmmm")
    }
}

// instance function
const car1 = new Car('Porche', 4, 3, 'internal combustion')
car1.engineMotor()
car1.acceleration()
car1.breaking()
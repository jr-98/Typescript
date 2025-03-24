class Animal {
    name: string
    private specie: string
    family: string

    constructor(_name: string, _specie: string, _family: string) {
        this.name = _name
        this.specie = _specie
        this.family = _family
    }
    public move(): void {
        console.log('get moving')
    }

}

const animal_1 = new Animal('Snauzher', 'Dog', 'Can')
animal_1.move()
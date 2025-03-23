class Sport {
    name: string
    type: string
    environment: string

    constructor(_name: string, _type: string, _environment: string) {
        this.name = _name
        this.type = _type
        this.environment = _environment
    }
    show(): void {
        console.log(`**${this.name}**\n
            type: ${this.type}
            environment: ${this.environment}`)
    }
}
class Football extends Sport {
    name_team: string
    country: string

    constructor(_name: string, _type: string, _environment: string, _name_team: string, _country: string) {
        super(_name, _type, _environment)
        this.name_team = _name_team
        this.country = _country
    }

    show_football(): void {
        console.log(`**${this.name}**\n
            type: ${this.type}
            environment: ${this.environment}
            team: ${this.name_team}
            country: ${this.country}`)
    }
}
const ecuador = new Football('Footbal', 'equipo', 'field', 'Seleccion Ecuatoriana de futbol', 'Ecuador')
ecuador.show_football()
ecuador.show()
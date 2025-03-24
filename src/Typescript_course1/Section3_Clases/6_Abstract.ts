abstract class Father {
    abstract walk(): void
    abstract run(): void

    greeting(greet: string): string {
        return greet
    }
}

class Children extends Father {
    walk(): void {
        console.log('I am walking')
    }
    run(): void {
        console.log('I am running')
    }
}
class Children2 extends Father {
    walk(): void {
        console.log('I am walking 2')
    }
    run(): void {
        console.log('I am running 2')
    }
}

const children1 = new Children()
console.log(children1.walk)
console.log(children1.greeting('Hello walkers'))

const children2 = new Children()
console.log(children1.run)
console.log(children1.greeting('Hello runners'))
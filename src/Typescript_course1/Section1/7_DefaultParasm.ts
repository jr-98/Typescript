function defaultParams(name?: string, createdAt: string = 'Jonathan'): void {
    if (name) {
        console.log(`hello ${name} you was creates by ${createdAt}`)
        return
    }
    console.log(`hello, you was created by ${createdAt}`)
}

defaultParams('user')
defaultParams()
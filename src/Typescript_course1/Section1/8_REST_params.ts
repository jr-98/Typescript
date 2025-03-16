const handleFn = (srcOperation: string, ...aditionalData: string[]): void => {
    console.log(`handle to http:api/${srcOperation}\n Whit this data\n ${aditionalData}`)
}

handleFn('getData', 'jonathan', 'tillaguango', '34')

function numbers_filtered_flattened(){
    let numbers = [
    [Number((Math.random() * 100).toFixed(0)), Number((Math.random() * 100).toFixed(0)), Number((Math.random() * 100).toFixed(0))],
    [Number((Math.random() * 100).toFixed(0)), Number((Math.random() * 100).toFixed(0)), Number((Math.random() * 100).toFixed(0))],
    [Number((Math.random() * 100).toFixed(0)), Number((Math.random() * 100).toFixed(0)), Number((Math.random() * 100).toFixed(0))]

];
numbers = numbers.flat().filter((v)=> v > 3)
return console.log(numbers)
}
numbers_filtered_flattened()
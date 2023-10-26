// Exercise #3: Min Numbers
let numbers = [100, 20, 3, 1000];
let minNumber = 0;

// Start coding here
for (let min in numbers){
    let nums = Number(min) + 1
    if (numbers[min] > numbers[nums]) {
        minNumber = numbers[nums]
    }
}
console.log(minNumber)
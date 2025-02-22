const msftData = [190.15, 194.21, 191.07, 190.44, 200.15];

// Write your code below

let totalSum = 0

for (let price of Object.values(msftData)){
    totalSum += price
}

let average = (totalSum/msftData.length)

console.log (average)
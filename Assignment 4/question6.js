// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

let lowest = [];

amdPrices.sort((a, b) => a - b);

for (let i = 0; i < 3; i++) {
    lowest.push(amdPrices[i]);
}

console.log(`The three lowest prices are ${lowest.join(", ")}`);

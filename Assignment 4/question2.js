const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below

totalSum = 0
avergae = 0

function sma (){
    for (let price of Object.values(amdPrices)){
        average = ((totalSum += price)/amdPrices.length)
    }
    console.log( `The 7-day SMA of AMD is ${average.toFixed(2)}`)
}

sma()
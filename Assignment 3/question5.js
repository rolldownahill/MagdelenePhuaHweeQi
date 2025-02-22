const bacData = [190.15, 194.21, 191.07, 192.44, 129000];

// Write your code below

const [low, high, open, close, volume] = bacData

if (close > open){
    if (volume > 100000){
        console.log ('Strong Bullish')
    }

    else {
        console.log ('Bullish')
    }
}

else if (close < open){
    if (volume >10000){
        console.log ('Strong Bearish')
    }

        else {
            console.log('Bearish')
        }
}

else {
    console.log ('Neutral')
}

// Ternary

// const trend = close > open 
//     ? (volume >100000 ? 'Strong Bullish' : 'Bullish')
//     : close < open 
//     ? (volume >10000 ? 'Strong Bearish' : 'Bearish')
//     : 'Neutral'

// console.log (trend)
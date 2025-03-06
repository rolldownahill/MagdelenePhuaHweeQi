const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
 
function average (){
	let totalClose = 0

	for(let price of msftData){
		totalClose += price [3]
	}

	let averageClose = totalClose / 2

	console.log(`Average closing price of MSFT is ${averageClose.toFixed(2)}`);
}

average()
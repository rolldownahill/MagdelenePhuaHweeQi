const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below

function averageClose (){
	let totalClose = 0
	let i = 0
	
	for (let price of disneyData){
		totalClose += parseFloat(price.close)
		i++
	}

	let average = totalClose/i

	console.log(`Average closing price of Disney is ${average.toFixed(2)}`)
}

averageClose()
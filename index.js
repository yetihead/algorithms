const Noomber = require('./noomber');

/**
 * Capacity of half-part of ticket number
 * 3 is for 000000
 */
const CAPACITY = 3;
const countOfSums = 9 * CAPACITY
/**
 * array of couners for each sum in range from 0 to 999
 */
const arrayOfSums = new Array(countOfSums).fill(0);
const noomber = new Noomber(CAPACITY);

for (let sum of noomber) {
	arrayOfSums[sum] += 1;
}

const sum = arrayOfSums
	.reduce(
		(sum, el) => el * el + sum,
		0
	)

console.log(sum);
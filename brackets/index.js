const checkBrackets = (str) => {
	if (!str) {
		return true;
	}

	let index = str.length - 1;
	let balance = 0;

	while (index >= 0) {
		if (str[index] === '(') balance--;
		if (str[index] === ')') balance++;
		if (balance < 0) return false;
		index--;
	}

	return balance === 0;
}

console.log(checkBrackets('123(asd)d'));
console.log(checkBrackets('123((asd)d'));
console.log(checkBrackets('123(asd)(d'));
console.log(checkBrackets('12)(3(asd)d'));
console.log(checkBrackets('(12)(3)(asd)d'));

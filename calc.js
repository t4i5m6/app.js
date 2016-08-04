function add(a, b) {
	console.log( a + ' + ' + b + ' = ');
	return a + b;
}


function minus(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function division(a, b) {
	return a / b;
}

module.exports = {
	add: add,
	minus: minus,
	multiply: multiply,
	division: division,
};

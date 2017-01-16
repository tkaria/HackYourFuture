function doSomething1() {
	var x;  // ? 
	x = 1;
	console.log(x);
}

function doSomething2() {
	var x = 1; // ? 
	console.log(x);
}

function doSomething3() {
	x = 1;
	console.log(x);
}

doSomething1();
doSomething2();
doSomething3();

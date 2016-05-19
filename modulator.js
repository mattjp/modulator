function compute() {
	var result;
	var num1 = document.getElementById("input1").value;
	var num2 = document.getElementById("input2").value;
	var frac1 = "";
	var frac2 = "";
	frac1 = num1.split(new RegExp("/", "gi")).length - 1;
	frac2 = num2.split(new RegExp("/", "gi")).length - 1;

	// handle blank input fields
	if(num1.length == 0) {
		result = "ERROR: Numerator is blank";
		document.getElementById("result").innerHTML = result;
		return;
	}
	else if(num2.length == 0) {
		result = "ERROR: Denominator is blank";
		document.getElementById("result").innerHTML = result;
		return;
	}
	// handle bad input
	else if(frac2 == 1) {
		result = "ERROR: Denominator cannot be a fraction";
		document.getElementById("result").innerHTML = result;
		return;
	}
	else if(frac2 > 1) {
		result = "ERROR: Denominator is improperly formatted";
		document.getElementById("result").innerHTML = result;
		return;
	}
	else if(frac1 > 1) {
		result = "ERROR: Numerator is improperly formatted";
		document.getElementById("result").innerHTML = result;
		return;
	}
	// calculations for fractions
	else if(frac1 == 1) {
		var numerator = num1.substr(0, num1.indexOf("/"));
		var denominator = num1.substr(num1.indexOf("/") + 1);
		if(denominator % num2 == 0) {
			result = "Denominator is zero";
			document.getElementById("result").innerHTML = result;
			return;
		}
		else {
			var x = 1;
			while(((denominator * x) % num2) != 1) {
				if(x == num2) {
					result = "No Solution Found";
					document.getElementById("result").innerHTML = result;
					return;
				}
				x = x + 1;
			}		
			result = ((numerator * x) % num2);
			document.getElementById("result").innerHTML = result;
		}
	}
	// normal modular calculations
	else if(frac1 == 0) {
		result = num1 % num2;
		document.getElementById("result").innerHTML = result;
	}
	else {
		result = "why would this ever happen?";
		document.getElementById("result").innerHTML = result;
	}
}
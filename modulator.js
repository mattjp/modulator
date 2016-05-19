function compute() {
	var result;
	// User input
	var dividend = document.getElementById("input1").value;
	var divisor = document.getElementById("input2").value;
	// Number of forward slashes
	var dividend_frac = dividend.split(new RegExp("/", "gi")).length - 1;
	var divisor_frac = divisor.split(new RegExp("/", "gi")).length - 1;
	// Number of hyphens
	var dividend_neg = dividend.split(new RegExp("-", "gi")).length - 1;
	var divisor_neg = divisor.split(new RegExp("-", "gi")).length - 1;

	// Handle blank input fields
	if(dividend.length == 0) {
		result = "ERROR: Numerator is blank";
		document.getElementById("result").innerHTML = result;
		return;
	}
	else if(divisor.length == 0) {
		result = "ERROR: Denominator is blank";
		document.getElementById("result").innerHTML = result;
		return;
	}

	// Handle bad divisor input
	else if(divisor_frac == 1) {
		result = "ERROR: Divisor cannot be a fraction";
		document.getElementById("result").innerHTML = result;
		return;
	}
	else if(divisor_neg == 1) {
		if(divisor.charAt(0) == "-") {
			result = "ERROR: Divisor cannot be negative";
		}
		else {
			result = "ERROR: Divisor is improperly formatted"
		}
		document.getElementById("result").innerHTML = result;
		return;
	}
	else if(divisor_frac > 1 || divisor_neg > 1) {
		result = "ERROR: Divisor is improperly formatted";
		document.getElementById("result").innerHTML = result;
		return;
	}

	// Handle bad dividend input
	else if(dividend_neg == 1 && dividend.charAt(0) != "-") {
		result = "ERROR: Dividend contains negative sign, but in wrong place";
		document.getElementById("result").innerHTML = result;
		return;
	}
	else if(dividend_frac > 1 || dividend_neg > 1) {
		result = "ERROR: Dividend is improperly formatted";
		document.getElementById("result").innerHTML = result;
		return;
	}

	// Computation
	else {
		// Calculations for negatives
		if(dividend_neg == 1) {
			if(dividend_frac == 1) {
				var numerator = parseInt(dividend.substr(0, dividend.indexOf("/")));
				var denominator = parseInt(dividend.substr(dividend.indexOf("/") + 1));
				var z = (parseInt(divisor) * denominator);
				while(numerator < 0) {
					numerator = numerator + z;
				}
				dividend = numerator + "/" + denominator;
			}
			else {
				var x = parseInt(dividend);
				var y = parseInt(divisor);
				while(x < 0) {
					x = x + y;
				}
				dividend = x;
			}
		}
		// Calculations for fractions
		if(dividend_frac == 1) {
			var numerator = dividend.substr(0, dividend.indexOf("/"));
			var denominator = dividend.substr(dividend.indexOf("/") + 1);
			// if denominator is a multiple of the divisor
			if(denominator % divisor == 0) {
				result = "Denominator is zero";
				document.getElementById("result").innerHTML = result;
				return;
			}
			// If the fraction is reducible
			if(numerator % denominator == 0) {
				dividend = numerator / denominator;
				result = dividend % divisor;
				document.getElementById("result").innerHTML = result;
				return;
			}
			// Find modular inverse of the fraction
			else {
				var x = 1;
				while(((denominator * x) % divisor) != 1) {
					if(x == divisor) {
						// No modular inverse exists
						result = "No Solution Found";
						document.getElementById("result").innerHTML = result;
						return;
					}
					x = x + 1;
				}		
				result = ((numerator * x) % divisor);
				document.getElementById("result").innerHTML = result;
				return;
			}
		}
		// Normal modular calculation
		else {
			result = dividend % divisor;
			document.getElementById("result").innerHTML = result;
			return;
		}
	}
}

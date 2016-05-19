function compute() {
	var result;
	var num1 = document.getElementById("input1").value;
	var num2 = document.getElementById("input2").value;
	result = num1 % num2;
	document.getElementById("result").innerHTML = result;
}
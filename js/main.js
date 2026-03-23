 function convertDollar() {
    var dollar = document.getElementById("Dollar").value;
    var result = document.getElementById("result");

    if (dollar == "") {
        result.innerHTML = "Enter Data";
        return false;

    } else if (isNaN(dollar)) {
        result.innerHTML = "Enter Number Not Text";
        return false;

    } else if (dollar < 0) {
        result.innerHTML = "Enter Positive Number";
        return false;

    } else if (dollar == 0) {
        result.innerHTML = "Enter number greater than zero";
        return false;

    } else {
        var egp = dollar * 55;
        result.innerHTML = dollar + " USD = " + egp + " Egyptian Pound";
        return false;
    }
}
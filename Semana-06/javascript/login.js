window.onload = function () {
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    email.onblur = function () {
        var email = document.getElementById("email");
        emailLength = email.value.length;
        if (emailExpression.test(email.value)) {
            email.classList.add("green-border");
        } else {
            email.classList.add("red-border");
        }
    }

    email.onfocus = function () {
        email.classList.remove("green-border", "red-border");
    }

    var passwordChars = [];
    var charUpper = 0;
    var charLower = 0;
    var charNumber = 0;

    password.onblur = function () {
        var password = document.getElementById("password");
        var passwordLength = password.value.length;
        if (passwordLength < 8) {
            password.classList.add("red-border");
        } else {
            for (i = 0; i < passwordLength; i++) {
                if (password.value.charAt(i) == password.value.charAt(i).toUpperCase() && charUpper == 0) {
                    charUpper++;
                } else if (password.value.charAt(i) == password.value.charAt(i).toLowerCase() && charLower == 0) {
                    charLower++;
                } else if (typeof Number(password.value.charAt(i)) == "number" && charNumber == 0) {
                    charNumber++;
                }
                if(charLower != 0 && charNumber != 0 && charUpper != 0) {
                    password.classList.add("green-border");
                    i = passwordLength;
                    charUpper = 0;
                    charLower = 0;
                    charNumber = 0;
                } else {
                    password.classList.add("red-border");
                }
            }
        }
    }

    password.onfocus = function () {
        password.classList.remove("green-border", "red-border");
    }
}
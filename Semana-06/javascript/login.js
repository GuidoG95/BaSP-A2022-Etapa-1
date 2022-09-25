window.onload = function () {

    var emailAlert = document.createElement("P");
    var passwordAlert = document.createElement("P");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    email.onblur = function () {
        var email = document.getElementById("email");
        emailLength = email.value.length;
        if(emailLength == 0) {
            emailAlert.innerHTML = "Email is required.";
            email.insertAdjacentElement('afterend', emailAlert);
        } else if (emailExpression.test(email.value)) {
            email.classList.add("green-border");
            emailAlert.innerHTML = "";
            email.insertAdjacentElement('afterend', emailAlert);
        } else {
            email.classList.add("red-border");
            emailAlert.innerHTML = "Invalid email.";
            email.insertAdjacentElement('afterend', emailAlert);
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
            passwordAlert.innerHTML = "Password must have at least 8 characters.";
            password.insertAdjacentElement('afterend', passwordAlert);
        } else {
            for (i = 0; i < passwordLength; i++) {
                if (password.value.charAt(i) == password.value.charAt(i).toUpperCase() && isNaN(password.value.charAt(i)) && charUpper == 0) {
                    charUpper++;
                } else if (password.value.charAt(i) == password.value.charAt(i).toLowerCase() && isNaN(password.value.charAt(i)) && charLower == 0) {
                    charLower++;
                } else if (!isNaN(password.value.charAt(i)) && charNumber == 0) {
                    charNumber++;
                }
                if(charLower != 0 && charNumber != 0 && charUpper != 0) {
                    password.classList.add("green-border");
                    i = passwordLength;
                    passwordAlert.innerHTML = "";
                    password.insertAdjacentElement('afterend', passwordAlert);
                } else {
                    password.classList.add("red-border");
                    passwordAlert.innerHTML = "Password must contain at least one uppercase, one lowercase and one number.";
                    password.insertAdjacentElement('afterend', passwordAlert);
                }
            }
        }
    }

    password.onfocus = function () {
        password.classList.remove("green-border", "red-border");
        charUpper = 0;
        charLower = 0;
        charNumber = 0;
    }
}
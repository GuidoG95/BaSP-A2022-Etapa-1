window.onload = function () {

    var buttonAlert = [];

    function validateLetters(a) {
        for (i = 0; i < a.length; i++) {
            if (!isNaN(a.charAt(i))) {
                i = a.length;
                return ("false");
            }
        }
        return ("true");
    }

    function validateNumbers(a) {
        for (i = 0; i < a.length; i++) {
            if (isNaN(a.charAt(i))) {
                return ("false");
            }
        }
        return ("true");
    }

    var firstName = document.getElementById("first-name");
    firstName.onblur = function () {
        var firstNameLength = firstName.value.length;
        if (firstNameLength >= 3) {
            if (validateLetters(firstName.value) == "true") {
                firstName.classList.add("green-border");
            } else {
                firstName.classList.add("red-border");
            }
        } else {
            firstName.classList.add("red-border");
        }
    }

    firstName.onfocus = function () {
        firstName.classList.remove("green-border", "red-border");
    }

    var lastName = document.getElementById("last-name");
    var lastNameLength = lastName.value.length;
    lastName.onblur = function () {
        if (lastNameLength >= 3) {
            if (validateLetters(lastName.value) == "true") {
                lastName.classList.add("green-border");
            }
        } else {
            lastName.classList.add("red-border");
        }
    }

    lastName.onfocus = function () {
        lastName.classList.remove("green-border", "red-border");
    }

    var documentNumber = document.getElementById("document-number");
    documentNumber.onblur = function () {
        if(documentNumber.value.length >= 7) {
            if(documentNumber.value.indexOf(" ") < 0) {
                if (validateNumbers(documentNumber.value) == "true") {
                    documentNumber.classList.add("green-border");
                } else {
                    documentNumber.classList.add("red-border");
                }
            } else {
                documentNumber.classList.add("red-border");
            }
        } else {
            documentNumber.classList.add("red-border");
        }
    }

    documentNumber.onfocus = function () {
        documentNumber.classList.remove("green-border", "red-border");
    }

    var phoneNumber = document.getElementById("phone-number");
    phoneNumber.onblur = function () {
        if(phoneNumber.value.length == 10) {
            if(phoneNumber.value.indexOf(" ") < 0) {
                if (validateNumbers(phoneNumber.value) == "true") {
                    phoneNumber.classList.add("green-border");
                } else {
                    phoneNumber.classList.add("red-border");
                }
            } else {
                phoneNumber.classList.add("red-border");
            }
        } else {
            phoneNumber.classList.add("red-border");
        }
    }

    phoneNumber.onfocus = function () {
        phoneNumber.classList.remove("green-border", "red-border");
    }

    var emailAlert = document.createElement("p");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    email.onblur = function () {
        var email = document.getElementById("email");
        var emailLength = email.value.length;
        if (emailLength == 0) {
            email.classList.add("red-border");
            emailAlert.innerHTML = "Email is required.";
            email.insertAdjacentElement('afterend', emailAlert);
            buttonAlert[8] = "Invalid email: required";
        } else if (emailExpression.test(email.value)) {
            email.classList.add("green-border");
            emailAlert.innerHTML = "";
            email.insertAdjacentElement('afterend', emailAlert);
            buttonAlert[8] = "Email: " + email.value;
        } else {
            email.classList.add("red-border");
            emailAlert.innerHTML = "Invalid email.";
            email.insertAdjacentElement('afterend', emailAlert);
            buttonAlert[8] = "Invalid email: " + email.value;
        }
    }

    email.onfocus = function () {
        email.classList.remove("green-border", "red-border");
        buttonAlert.splice(0);
    }

    var passwordAlert = document.createElement("p");
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
            buttonAlert[9] = "Invalid password: must have at least 8 characters";
        } else {
            for (i = 0; i < passwordLength; i++) {
                if (password.value.charAt(i) == password.value.charAt(i).toUpperCase() && isNaN(password.value.charAt(i)) && charUpper == 0) {
                    charUpper++;
                } else if (password.value.charAt(i) == password.value.charAt(i).toLowerCase() && isNaN(password.value.charAt(i)) && charLower == 0) {
                    charLower++;
                } else if (!isNaN(password.value.charAt(i)) && charNumber == 0) {
                    charNumber++;
                }
                if (charLower != 0 && charNumber != 0 && charUpper != 0) {
                    password.classList.add("green-border");
                    i = passwordLength;
                    passwordAlert.innerHTML = "";
                    password.insertAdjacentElement('afterend', passwordAlert);
                    buttonAlert[9] = "Password: " + password.value;
                } else {
                    password.classList.add("red-border");
                    passwordAlert.innerHTML = "Password must contain at least one uppercase, one lowercase and one number.";
                    password.insertAdjacentElement('afterend', passwordAlert);
                    buttonAlert[9] = "Invalid password: " + password.value + " must contain at least one uppercase, one lowercase and one number.";
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

    var confirmPasswordAlert = document.createElement("p");

    var confirmPassword = document.getElementById("confirm-password");
    confirmPassword.onblur = function () {
        var password = document.getElementById("password");
        if (confirmPassword.value == password.value) {
            confirmPassword.classList.add("green-border");
            confirmPasswordAlert.innerHTML = "";
            confirmPassword.insertAdjacentElement('afterend', confirmPasswordAlert);
            buttonAlert[10] = "Password: " + confirmPassword.value;
        } else {
            confirmPassword.classList.add("red-border");
            confirmPasswordAlert.innerHTML = "Passwords don't match.";
            confirmPassword.insertAdjacentElement('afterend', confirmPasswordAlert);
            buttonAlert[10] = "Password: " + confirmPassword.value;
        }
    }

    confirmPassword.onfocus = function () {
        confirmPassword.classList.remove("green-border", "red-border");
    }
}
window.onload = function () {

    var buttonAlert = [];
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function validateLetters(a) {
        for (i = 0; i < a.length; i++) {
            if (chars.indexOf(a.charAt(i)) == -1) {
                return false;
            }
        }
        return true;
    }

    function validateNumbers(a) {
        for (i = 0; i < a.length; i++) {
            if (isNaN(a.charAt(i))) {
                return false;
            }
        }
        return true;
    }

    var firstName = document.getElementById("first-name");
    var firstNameAlert = document.createElement("p");

    firstName.onblur = function () {
        var firstNameLength = firstName.value.length;
        if (firstNameLength == 0) {
            firstName.classList.add("red-border");
            firstNameAlert.innerHTML = "Name is required.";
            firstName.insertAdjacentElement('afterend', firstNameAlert);
            buttonAlert[0] = "Invalid name: " + firstNameAlert;
        } else if (firstNameLength >= 3) {
            if (validateLetters(firstName.value) == true) {
                firstName.classList.add("green-border");
                firstNameAlert.innerHTML = "";
                firstName.insertAdjacentElement('afterend', firstNameAlert);
                buttonAlert[0] = "Name: " + firstName;
            } else {
                firstName.classList.add("red-border");
                firstNameAlert.innerHTML = "Name must have only letters.";
                firstName.insertAdjacentElement('afterend', firstNameAlert);
                buttonAlert[0] = "Invalid name: " + firstNameAlert;
            }
        } else {
            firstName.classList.add("red-border");
            firstNameAlert.innerHTML = "Name must have 3 or more characters.";
            firstName.insertAdjacentElement('afterend', firstNameAlert);
            buttonAlert[0] = "Invalid name: " + firstNameAlert;
        }
    }

    firstName.onfocus = function () {
        firstName.classList.remove("green-border", "red-border");
    }

    var lastName = document.getElementById("last-name");
    var lastNameAlert = document.createElement("p");

    lastName.onblur = function () {
        var lastNameLength = lastName.value.length;
        if (lastNameLength == 0) {
            lastName.classList.add("red-border");
            lastNameAlert.innerHTML = "Last name is required.";
            lastName.insertAdjacentElement('afterend', lastNameAlert);
            buttonAlert[1] = "Invalid last name: " + lastNameAlert;
        } else if (lastNameLength >= 3) {
            if (validateLetters(lastName.value) == true) {
                lastName.classList.add("green-border");
                lastNameAlert.innerHTML = "";
                lastName.insertAdjacentElement('afterend', lastNameAlert);
                buttonAlert[1] = "Last name: " + lastName;
            } else {
                lastName.classList.add("red-border");
                lastNameAlert.innerHTML = "Last name must have only letters.";
                lastName.insertAdjacentElement('afterend', lastNameAlert);
                buttonAlert[1] = "Invalid last name: " + lastNameAlert;
            }
        } else {
            lastName.classList.add("red-border");
            lastNameAlert.innerHTML = "Last name must have 3 or more characters.";
            lastName.insertAdjacentElement('afterend', lastNameAlert);
            buttonAlert[1] = "Invalid last name: " + lastNameAlert;
        }
    }

    lastName.onfocus = function () {
        lastName.classList.remove("green-border", "red-border");
    }

    var documentNumber = document.getElementById("document-number");
    var documentAlert = document.createElement("p");

    documentNumber.onblur = function () {
        if (documentNumber.value.length >= 7) {
            if (documentNumber.value.indexOf(" ") < 0) {
                if (validateNumbers(documentNumber.value) == true) {
                    documentNumber.classList.add("green-border");
                    documentAlert.innerHTML = "";
                    documentNumber.insertAdjacentElement('afterend', documentAlert);
                    buttonAlert[2] = "Document: " + documentNumber;
                } else {
                    documentNumber.classList.add("red-border");
                    documentAlert.innerHTML = "Document must be only numbers.";
                    documentNumber.insertAdjacentElement('afterend', documentAlert);
                    buttonAlert[2] = "Invalid document: " + documentAlert;
                }
            } else {
                documentNumber.classList.add("red-border");
                documentAlert.innerHTML = "Document can't have spaces between numbers.";
                documentNumber.insertAdjacentElement('afterend', documentAlert);
                buttonAlert[2] = "Invalid document: " + documentAlert;
            }
        } else if (documentNumber.value.length > 0) {
            documentNumber.classList.add("red-border");
            documentAlert.innerHTML = "Document must be at least 7 digits long.";
            documentNumber.insertAdjacentElement('afterend', documentAlert);
            buttonAlert[2] = "Invalid document: " + documentAlert;
        } else {
            documentNumber.classList.add("red-border");
            documentAlert.innerHTML = "Document is required.";
            documentNumber.insertAdjacentElement('afterend', documentAlert);
            buttonAlert[2] = "Invalid document: " + documentAlert;
        }
    }

    documentNumber.onfocus = function () {
        documentNumber.classList.remove("green-border", "red-border");
    }

    var phoneNumber = document.getElementById("phone-number");
    var phoneAlert = document.createElement("p");

    phoneNumber.onblur = function () {
        if (phoneNumber.value.length == 10) {
            if (phoneNumber.value.indexOf(" ") < 0) {
                if (validateNumbers(phoneNumber.value) == true) {
                    phoneNumber.classList.add("green-border");
                    phoneAlert.innerHTML = "";
                    phoneNumber.insertAdjacentElement('afterend', phoneAlert);
                    buttonAlert[4] = "Phone: " + phoneAlert;
                } else {
                    phoneNumber.classList.add("red-border");
                    phoneAlert.innerHTML = "Phone must have only numbers.";
                    phoneNumber.insertAdjacentElement('afterend', phoneAlert);
                    buttonAlert[4] = "Invalid phone: " + phoneAlert;
                }
            } else {
                phoneNumber.classList.add("red-border");
                phoneAlert.innerHTML = "Phone can't have spaces between numbers.";
                phoneNumber.insertAdjacentElement('afterend', phoneAlert);
                buttonAlert[4] = "Invalid phone: " + phoneAlert;
            }
        } else if (phoneNumber.value.length > 0) {
            phoneNumber.classList.add("red-border");
            phoneAlert.innerHTML = "Phone must be 10 digits long.";
            phoneNumber.insertAdjacentElement('afterend', phoneAlert);
            buttonAlert[4] = "Invalid phone: " + phoneAlert;
        } else {
            phoneNumber.classList.add("red-border");
            phoneAlert.innerHTML = "Phone is required.";
            phoneNumber.insertAdjacentElement('afterend', phoneAlert);
            buttonAlert[4] = "Invalid phone: " + phoneAlert;
        }
    }

    phoneNumber.onfocus = function () {
        phoneNumber.classList.remove("green-border", "red-border");
    }

    var adress = document.getElementById("adress");
    var adressAlert = document.createElement("p");

    adress.onblur = function () {
        for (i = 0; i < adress.value.length; i++) {
            if (adress.value.charAt(i) == " ") {
                var spaces = spaces + 1;
            }
            if (spaces == 1) {
                var spacePos = adress.value.indexOf(" ");
                var adressLetters = adress.value.substring(0, spacePos);
                var adressNumbers = adress.value.substring(spacePos + 1);
                if (validateLetters(adressLetters) == true && validateNumbers(adressNumbers) == true) {
                    adress.classList.add("green-border");
                    adressAlert.innerHTML = "";
                    adress.insertAdjacentElement('afterend', adressAlert);
                    buttonAlert[5] = "Adress: " + adressAlert;
                }
            } else {
                adress.classList.add("red-border");
                adressAlert.innerHTML = "Adress must have one space.";
                adress.insertAdjacentElement('afterend', adressAlert);
                buttonAlert[5] = "Invalid adress: " + adressAlert;
            }
        }
    }

    var city = document.getElementById("city");
    var cityAlert = document.createElement("p");

    city.onblur = function () {
        if (city.value.length == 0) {
            city.classList.add("red-border");
            cityAlert.innerHTML = "City is required.";
            city.insertAdjacentElement('afterend', cityAlert);
            city[6] = "City: " + cityAlert;
        } else if (city.value.length >= 3) {
            city.classList.add("green-border");
            cityAlert.innerHTML = "";
            city.insertAdjacentElement('afterend', city);
            city[6] = "City: " + cityAlert;
        } else {
            city.classList.add("red-border");
            cityAlert.innerHTML = "City must be at least 3 characters long.";
            city.insertAdjacentElement('afterend', cityAlert);
            city[6] = "City: " + cityAlert;
        }
    }

    city.onfocus = function () {
        city.classList.remove("green-border", "red-border");
    }

    var postalCode = document.getElementById("postal-code");
    var postalCodeAlert = document.createElement("p");

    postalCode.onblur = function () {
        if (postalCode.value.length >= 4 && postalCode.value.length <= 5) {
            if (postalCode.value.indexOf(" ") < 0) {
                if (validateNumbers(postalCode.value) == true) {
                    postalCode.classList.add("green-border");
                    postalCodeAlert.innerHTML = "";
                    postalCode.insertAdjacentElement('afterend', postalCodeAlert);
                    buttonAlert[7] = "Postal code: " + postalCodeAlert;
                } else {
                    postalCode.classList.add("red-border");
                    postalCodeAlert.innerHTML = "Postal code must have only numbers.";
                    postalCode.insertAdjacentElement('afterend', postalCodeAlert);
                    buttonAlert[7] = "Invalid Postal code: " + postalCodeAlert;
                }
            } else {
                postalCode.classList.add("red-border");
                postalCodeAlert.innerHTML = "Postal code can't have spaces between numbers.";
                postalCode.insertAdjacentElement('afterend', postalCodeAlert);
                buttonAlert[7] = "Invalid Postal code: " + postalCodeAlert;
            }
        } else if (postalCode.value.length > 0) {
            postalCode.classList.add("red-border");
            postalCodeAlert.innerHTML = "Postal code must be 4 or 5 digits long.";
            postalCode.insertAdjacentElement('afterend', postalCodeAlert);
            buttonAlert[7] = "Invalid Postal code: " + postalCodeAlert;
        } else {
            postalCode.classList.add("red-border");
            postalCodeAlert.innerHTML = "Postal code is required.";
            postalCode.insertAdjacentElement('afterend', postalCodeAlert);
            buttonAlert[7] = "Invalid Postal code: " + postalCodeAlert;
        }
    }

    postalCode.onfocus = function () {
        postalCode.classList.remove("green-border", "red-border");
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
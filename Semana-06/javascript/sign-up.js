window.onload = function () {

    var buttonAlert = [];
    buttonAlert[0] = "Invalid name: Name is required";
    buttonAlert[1] = "Invalid last name: Last name is required";
    buttonAlert[2] = "Invalid last document: Document is required";
    buttonAlert[3] = "Invalid date: Date of birth is required";
    buttonAlert[4] = "Invalid phone: Phone number is required";
    buttonAlert[5] = "Invalid adress: Adress is required";
    buttonAlert[6] = "Invalid city: City is required";
    buttonAlert[7] = "Invalid postal code: Postal code is required";
    buttonAlert[8] = "Invalid email: Email is required";
    buttonAlert[9] = "Invalid password: Password is required";
    buttonAlert[10] = "Invalid confirm password: Confirm password is required";

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
            buttonAlert[0] = "Invalid name: " + firstNameAlert.innerHTML;
        } else if (firstNameLength >= 3) {
            if (validateLetters(firstName.value) == true) {
                firstName.classList.add("green-border");
                firstNameAlert.innerHTML = "";
                firstName.insertAdjacentElement('afterend', firstNameAlert);
                buttonAlert[0] = "Name: " + firstName.value;
            } else {
                firstName.classList.add("red-border");
                firstNameAlert.innerHTML = "Name must have only letters.";
                firstName.insertAdjacentElement('afterend', firstNameAlert);
                buttonAlert[0] = "Invalid name: " + firstNameAlert.innerHTML;
            }
        } else {
            firstName.classList.add("red-border");
            firstNameAlert.innerHTML = "Name must have 3 or more characters.";
            firstName.insertAdjacentElement('afterend', firstNameAlert);
            buttonAlert[0] = "Invalid name: " + firstNameAlert.innerHTML;
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
            buttonAlert[1] = "Invalid last name: " + lastNameAlert.innerHTML;
        } else if (lastNameLength >= 3) {
            if (validateLetters(lastName.value) == true) {
                lastName.classList.add("green-border");
                lastNameAlert.innerHTML = "";
                lastName.insertAdjacentElement('afterend', lastNameAlert);
                buttonAlert[1] = "Last name: " + lastName.value;
            } else {
                lastName.classList.add("red-border");
                lastNameAlert.innerHTML = "Last name must have only letters.";
                lastName.insertAdjacentElement('afterend', lastNameAlert);
                buttonAlert[1] = "Invalid last name: " + lastNameAlert.innerHTML;
            }
        } else {
            lastName.classList.add("red-border");
            lastNameAlert.innerHTML = "Last name must have 3 or more characters.";
            lastName.insertAdjacentElement('afterend', lastNameAlert);
            buttonAlert[1] = "Invalid last name: " + lastNameAlert.innerHTML;
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
                    buttonAlert[2] = "Document: " + documentNumber.value;
                } else {
                    documentNumber.classList.add("red-border");
                    documentAlert.innerHTML = "Document must be only numbers.";
                    documentNumber.insertAdjacentElement('afterend', documentAlert);
                    buttonAlert[2] = "Invalid document: " + documentAlert.innerHTML;
                }
            } else {
                documentNumber.classList.add("red-border");
                documentAlert.innerHTML = "Document can't have spaces between numbers.";
                documentNumber.insertAdjacentElement('afterend', documentAlert);
                buttonAlert[2] = "Invalid document: " + documentAlert.innerHTML;
            }
        } else if (documentNumber.value.length > 0) {
            documentNumber.classList.add("red-border");
            documentAlert.innerHTML = "Document must be at least 7 digits long.";
            documentNumber.insertAdjacentElement('afterend', documentAlert);
            buttonAlert[2] = "Invalid document: " + documentAlert.innerHTML;
        } else {
            documentNumber.classList.add("red-border");
            documentAlert.innerHTML = "Document is required.";
            documentNumber.insertAdjacentElement('afterend', documentAlert);
            buttonAlert[2] = "Invalid document: " + documentAlert.innerHTML;
        }
    }

    documentNumber.onfocus = function () {
        documentNumber.classList.remove("green-border", "red-border");
    }

    var dateOfBirth = document.getElementById("date-of-birth");
    var dateAlert = document.createElement("p");

    dateOfBirth.onblur = function () {
        if (dateOfBirth.value == "") {
            dateOfBirth.classList.add("red-border");
            dateAlert.innerHTML = "Date of birth is required.";
            dateOfBirth.insertAdjacentElement('afterend', dateAlert);
            buttonAlert[3] = "Invalid date: " + dateAlert.innerHTML;
        } else {
            dateOfBirth.classList.add("green-border");
            dateAlert.innerHTML = "";
            dateOfBirth.insertAdjacentElement('afterend', dateAlert);
            buttonAlert[3] = "Date of birth: " + dateOfBirth.value;
        }
    }

    dateOfBirth.onfocus = function () {
        dateOfBirth.classList.remove("green-border", "red-border");
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
                    buttonAlert[4] = "Phone: " + phoneNumber.value;
                } else {
                    phoneNumber.classList.add("red-border");
                    phoneAlert.innerHTML = "Phone must have only numbers.";
                    phoneNumber.insertAdjacentElement('afterend', phoneAlert);
                    buttonAlert[4] = "Invalid phone: " + phoneAlert.innerHTML;
                }
            } else {
                phoneNumber.classList.add("red-border");
                phoneAlert.innerHTML = "Phone can't have spaces between numbers.";
                phoneNumber.insertAdjacentElement('afterend', phoneAlert);
                buttonAlert[4] = "Invalid phone: " + phoneAlert.innerHTML;
            }
        } else if (phoneNumber.value.length > 0) {
            phoneNumber.classList.add("red-border");
            phoneAlert.innerHTML = "Phone must be 10 digits long.";
            phoneNumber.insertAdjacentElement('afterend', phoneAlert);
            buttonAlert[4] = "Invalid phone: " + phoneAlert.innerHTML;
        } else {
            phoneNumber.classList.add("red-border");
            phoneAlert.innerHTML = "Phone is required.";
            phoneNumber.insertAdjacentElement('afterend', phoneAlert);
            buttonAlert[4] = "Invalid phone: " + phoneAlert.innerHTML;
        }
    }

    phoneNumber.onfocus = function () {
        phoneNumber.classList.remove("green-border", "red-border");
    }

    var adress = document.getElementById("adress");
    var adressAlert = document.createElement("p");
    var spacePos = 0;

    adress.onblur = function () {
        if (adress.value.length == 0) {
            adress.classList.add("red-border");
            adressAlert.innerHTML = "Adress is required.";
            adress.insertAdjacentElement('afterend', adressAlert);
            buttonAlert[5] = "Invalid adress: " + adressAlert.innerHTML;
        } else if (adress.value.length < 5) {
            adress.classList.add("red-border");
            adressAlert.innerHTML = "Adress must have at least 5 characters.";
            adress.insertAdjacentElement('afterend', adressAlert);
            buttonAlert[5] = "Invalid adress: " + adressAlert.innerHTML;
        } else {
            for (i = 0; i < adress.value.length; i++) {
                if (adress.value.charAt(i) == " ") {
                    spacePos = adress.value.indexOf(" ");
                }
                if (spacePos > 0 && spacePos < adress.value.length - 1) {
                    adress.classList.add("green-border");
                    adressAlert.innerHTML = "";
                    adress.insertAdjacentElement('afterend', adressAlert);
                    buttonAlert[5] = "Adress: " + adress.value;
                } else {
                    adress.classList.add("red-border");
                    adressAlert.innerHTML = "Adress must have at least one space in the middle.";
                    adress.insertAdjacentElement('afterend', adressAlert);
                    buttonAlert[5] = "Invalid adress: " + adressAlert.innerHTML;
                }
            }
        }
    }

    adress.onfocus = function () {
        adress.classList.remove("green-border", "red-border");
    }

    var city = document.getElementById("city");
    var cityAlert = document.createElement("p");

    city.onblur = function () {
        if (city.value.length == 0) {
            city.classList.add("red-border");
            cityAlert.innerHTML = "City is required.";
            city.insertAdjacentElement('afterend', cityAlert);
            city[6] = "City: " + cityAlert.innerHTML;
        } else if (city.value.length >= 3) {
            city.classList.add("green-border");
            cityAlert.innerHTML = "";
            city.insertAdjacentElement('afterend', city);
            city[6] = "City: " + city.value;
        } else {
            city.classList.add("red-border");
            cityAlert.innerHTML = "City must be at least 3 characters long.";
            city.insertAdjacentElement('afterend', cityAlert);
            city[6] = "City: " + cityAlert.innerHTML;
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
                    buttonAlert[7] = "Postal code: " + postalCode.value;
                } else {
                    postalCode.classList.add("red-border");
                    postalCodeAlert.innerHTML = "Postal code must have only numbers.";
                    postalCode.insertAdjacentElement('afterend', postalCodeAlert);
                    buttonAlert[7] = "Invalid Postal code: " + postalCodeAlert.innerHTML;
                }
            } else {
                postalCode.classList.add("red-border");
                postalCodeAlert.innerHTML = "Postal code can't have spaces between numbers.";
                postalCode.insertAdjacentElement('afterend', postalCodeAlert);
                buttonAlert[7] = "Invalid Postal code: " + postalCodeAlert.innerHTML;
            }
        } else if (postalCode.value.length > 0) {
            postalCode.classList.add("red-border");
            postalCodeAlert.innerHTML = "Postal code must be 4 or 5 digits long.";
            postalCode.insertAdjacentElement('afterend', postalCodeAlert);
            buttonAlert[7] = "Invalid Postal code: " + postalCodeAlert.innerHTML;
        } else {
            postalCode.classList.add("red-border");
            postalCodeAlert.innerHTML = "Postal code is required.";
            postalCode.insertAdjacentElement('afterend', postalCodeAlert);
            buttonAlert[7] = "Invalid Postal code: " + postalCodeAlert.innerHTML;
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
            buttonAlert[8] = "Invalid email: " + emailAlert.innerHTML;
        } else if (emailExpression.test(email.value)) {
            email.classList.add("green-border");
            emailAlert.innerHTML = "";
            email.insertAdjacentElement('afterend', emailAlert);
            buttonAlert[8] = "Email: " + email.value;
        } else {
            email.classList.add("red-border");
            emailAlert.innerHTML = "Invalid email.";
            email.insertAdjacentElement('afterend', emailAlert);
            buttonAlert[8] = "Invalid email: " + emailAlert.innerHTML;
        }
    }

    email.onfocus = function () {
        email.classList.remove("green-border", "red-border");
    }

    var passwordAlert = document.createElement("p");
    var charUpper = 0;
    var charLower = 0;
    var charNumber = 0;
    password.onblur = function () {
        var password = document.getElementById("password");
        var passwordLength = password.value.length;
        if (passwordLength == 0) {
            password.classList.add("red-border");
            passwordAlert.innerHTML = "Password is required.";
            password.insertAdjacentElement('afterend', passwordAlert);
            buttonAlert[9] = "Invalid password: " + passwordAlert.innerHTML;
        } else if (passwordLength < 8) {
            password.classList.add("red-border");
            passwordAlert.innerHTML = "Password must have at least 8 characters.";
            password.insertAdjacentElement('afterend', passwordAlert);
            buttonAlert[9] = "Invalid password: " + passwordAlert.innerHTML;
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
                    buttonAlert[9] = "Invalid password: " + passwordAlert.innerHTML;
                }
            }
        }
        if (confirmPassword.value != password.value) {
            confirmPassword.classList.add("red-border");
            confirmPasswordAlert.innerHTML = "Passwords don't match.";
            confirmPassword.insertAdjacentElement('afterend', confirmPasswordAlert);
            buttonAlert[10] = "Confirm password: " + confirmPasswordAlert.innerHTML;
        }
    }

    password.onfocus = function () {
        password.classList.remove("green-border", "red-border");
        confirmPassword.classList.remove("green-border", "red-border");
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
            buttonAlert[10] = "Confirm password: " + confirmPassword.value;
        } else {
            confirmPassword.classList.add("red-border");
            confirmPasswordAlert.innerHTML = "Passwords don't match.";
            confirmPassword.insertAdjacentElement('afterend', confirmPasswordAlert);
            buttonAlert[10] = "Confirm password: " + confirmPasswordAlert.innerHTML;
        }
    }

    confirmPassword.onfocus = function () {
        confirmPassword.classList.remove("green-border", "red-border");
    }

    var signUpButton = document.getElementById("sign-up-button");

    signUpButton.onclick = function () {
        var buttonAlertString = [];
        for (i = 0; i < buttonAlert.length; i++) {
            buttonAlertString.push(buttonAlert[i]);
        }
        buttonAlertString = buttonAlertString.join("\n");
        alert(buttonAlertString);
    }
}
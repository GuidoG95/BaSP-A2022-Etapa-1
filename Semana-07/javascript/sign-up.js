window.onload = function () {

    var buttonAlert = [];
    buttonAlert[0] = "Invalid name: Name is required";
    buttonAlert[1] = "Invalid last name: Last name is required";
    buttonAlert[2] = "Invalid last document: Document is required";
    buttonAlert[3] = "Invalid date: Date of birth is required";
    buttonAlert[4] = "Invalid phone: Phone number is required";
    buttonAlert[5] = "Invalid address: address is required";
    buttonAlert[6] = "Invalid city: City is required";
    buttonAlert[7] = "Invalid postal code: Postal code is required";
    buttonAlert[8] = "Invalid email: Email is required";
    buttonAlert[9] = "Invalid password: Password is required";
    buttonAlert[10] = "Invalid confirm password: Confirm password is required";
    var paramLink = "https://basp-m2022-api-rest-server.herokuapp.com/signup?";
    var paramQuerys = [];

    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";

    function validateLetters(a) {
        for (i = 0; i < a.length; i++) {
            if (chars.indexOf(a.charAt(i)) < 0) {
                return false;
            }
        }
        return true;
    }

    var charsPass = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    function validateSpecials(a) {
        for (i = 0; i < a.length; i++) {
            if (charsPass.indexOf(a.charAt(i)) < 0) {
                return false;
            }
        }
        return true;
    }

    var letterValid = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    var spaceChar = " ";

    function validateAddress(a) {
        var letter = 0;
        var num = 0;
        var space = 0;
        for (i = 0; i < a.length; i++) {
            if (letterValid.indexOf(a.charAt(i)) >= 0) {
                letter++;
            }
            if (!isNaN(a.charAt(i)) && a.charAt(i) != " ") {
                num++;
            }
            if (spaceChar.indexOf(a.charAt(i)) >= 0) {
                space++;
            }
        }
        if (letter > 0 && num > 0 && space > 0) {
            return true;
        } else {
            return false;
        }
    }

    function validateCity(a) {
        for (i = 0; i < a.length; i++) {
            if (letterValid.indexOf(a.charAt(i)) >= 0) {
                return true;
            }
        }
        return false;
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
        if (!firstNameLength) {
            firstName.classList.add("red-border");
            firstNameAlert.innerHTML = "Name is required.";
            firstName.insertAdjacentElement('afterend', firstNameAlert);
            buttonAlert[0] = "Invalid name: " + firstNameAlert.innerHTML;
        } else if (firstNameLength >= 3) {
            if (validateLetters(firstName.value)) {
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
        paramQuerys[0] = "name=" + firstName.value;
    }

    firstName.onfocus = function () {
        firstName.classList.remove("green-border", "red-border");
    }

    var lastName = document.getElementById("last-name");
    var lastNameAlert = document.createElement("p");

    lastName.onblur = function () {
        var lastNameLength = lastName.value.length;
        if (!lastNameLength) {
            lastName.classList.add("red-border");
            lastNameAlert.innerHTML = "Last name is required.";
            lastName.insertAdjacentElement('afterend', lastNameAlert);
            buttonAlert[1] = "Invalid last name: " + lastNameAlert.innerHTML;
        } else if (lastNameLength >= 3) {
            if (validateLetters(lastName.value)) {
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
        paramQuerys[1] = "lastName=" + lastName.value;
    }

    lastName.onfocus = function () {
        lastName.classList.remove("green-border", "red-border");
    }

    var documentNumber = document.getElementById("document-number");
    var documentAlert = document.createElement("p");

    documentNumber.onblur = function () {
        if (documentNumber.value.length >= 7) {
            if (documentNumber.value.indexOf(" ") < 0) {
                if (validateNumbers(documentNumber.value)) {
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
        paramQuerys[2] = "dni=" + documentNumber.value;
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
            var dateOfBirthFormated = dateOfBirth.value.substring(5, 7) + "/" + dateOfBirth.value.substring(8) + "/" + dateOfBirth.value.substring(0, 4);
            dateOfBirth.classList.add("green-border");
            dateAlert.innerHTML = "";
            dateOfBirth.insertAdjacentElement('afterend', dateAlert);
            buttonAlert[3] = "Date of birth: " + dateOfBirthFormated;
        }
        paramQuerys[3] = "dob=" + dateOfBirthFormated;
    }

    dateOfBirth.onfocus = function () {
        dateOfBirth.classList.remove("green-border", "red-border");
    }

    var phoneNumber = document.getElementById("phone-number");
    var phoneAlert = document.createElement("p");

    phoneNumber.onblur = function () {
        if (phoneNumber.value.length == 10) {
            if (phoneNumber.value.indexOf(" ") < 0) {
                if (validateNumbers(phoneNumber.value)) {
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
        paramQuerys[4] = "phone=" + phoneNumber.value;
    }

    phoneNumber.onfocus = function () {
        phoneNumber.classList.remove("green-border", "red-border");
    }

    var address = document.getElementById("address");
    var addressAlert = document.createElement("p");
    var spacePos = 0;

    address.onblur = function () {
        var addressLength = address.value.length;
        if (!addressLength) {
            address.classList.add("red-border");
            addressAlert.innerHTML = "Address is required.";
            address.insertAdjacentElement('afterend', addressAlert);
            buttonAlert[5] = "Invalid address: " + addressAlert.innerHTML;
        } else if (addressLength < 5) {
            address.classList.add("red-border");
            addressAlert.innerHTML = "Address must have at least 5 characters.";
            address.insertAdjacentElement('afterend', addressAlert);
            buttonAlert[5] = "Invalid address: " + addressAlert.innerHTML;
        } else if (address.value.charAt(0) != " " && address.value.charAt(addressLength - 1) != " ") {
            if (validateAddress(address.value)) {
                address.classList.add("green-border");
                addressAlert.innerHTML = "";
                address.insertAdjacentElement('afterend', addressAlert);
                buttonAlert[5] = "address: " + address.value;
            } else {
                address.classList.add("red-border");
                addressAlert.innerHTML = "Address must contain only letters, numbers and a space between.";
                address.insertAdjacentElement('afterend', addressAlert);
                buttonAlert[5] = "Invalid address: " + addressAlert.innerHTML;
            }
        } else {
            address.classList.add("red-border");
            addressAlert.innerHTML = "Space can't be at the start or end of the address.";
            address.insertAdjacentElement('afterend', addressAlert);
            buttonAlert[5] = "Invalid address: " + addressAlert.innerHTML;
        }
        paramQuerys[5] = "address=" + address.value;
    }

    address.onfocus = function () {
        address.classList.remove("green-border", "red-border");
    }

    var city = document.getElementById("city");
    var cityAlert = document.createElement("p");

    city.onblur = function () {
        if (!city.value.length) {
            city.classList.add("red-border");
            cityAlert.innerHTML = "City is required.";
            city.insertAdjacentElement('afterend', cityAlert);
            buttonAlert[6] = "City: " + cityAlert.innerHTML;
        } else if (city.value.length >= 3) {
            if (validateCity(city.value)) {
                city.classList.add("green-border");
                cityAlert.innerHTML = "";
                city.insertAdjacentElement('afterend', city);
                buttonAlert[6] = "City: " + city.value;
            } else {
                city.classList.add("red-border");
                cityAlert.innerHTML = "City must contain letters.";
                city.insertAdjacentElement('afterend', cityAlert);
                buttonAlert[6] = "City: " + cityAlert.innerHTML;
            }
        } else {
            city.classList.add("red-border");
            cityAlert.innerHTML = "City must be at least 3 characters long.";
            city.insertAdjacentElement('afterend', cityAlert);
            buttonAlert[6] = "City: " + cityAlert.innerHTML;
        }
        paramQuerys[6] = "city=" + city.value;
    }

    city.onfocus = function () {
        city.classList.remove("green-border", "red-border");
    }

    var postalCode = document.getElementById("postal-code");
    var postalCodeAlert = document.createElement("p");

    postalCode.onblur = function () {
        if (postalCode.value.length >= 4 && postalCode.value.length <= 5) {
            if (postalCode.value.indexOf(" ") < 0) {
                if (validateNumbers(postalCode.value)) {
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
        paramQuerys[7] = "zip=" + postalCode.value;
    }

    postalCode.onfocus = function () {
        postalCode.classList.remove("green-border", "red-border");
    }

    var emailAlert = document.createElement("p");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    email.onblur = function () {
        var email = document.getElementById("email");
        var emailLength = email.value.length;
        if (!emailLength) {
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
        paramQuerys[8] = "email=" + email.value;
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
        if (!passwordLength) {
            password.classList.add("red-border");
            passwordAlert.innerHTML = "Password is required.";
            password.insertAdjacentElement('afterend', passwordAlert);
            buttonAlert[9] = "Invalid password: " + passwordAlert.innerHTML;
        } else if (passwordLength < 8) {
            password.classList.add("red-border");
            passwordAlert.innerHTML = "Password must have at least 8 characters.";
            password.insertAdjacentElement('afterend', passwordAlert);
            buttonAlert[9] = "Invalid password: " + passwordAlert.innerHTML;
        } else if (!validateSpecials(password.value)) {
            password.classList.add("red-border");
            passwordAlert.innerHTML = "Password can't contain special characters.";
            password.insertAdjacentElement('afterend', passwordAlert);
            buttonAlert[9] = "Invalid password: " + passwordAlert.innerHTML;
        } else {
            for (i = 0; i < passwordLength; i++) {
                if (password.value.charAt(i) == password.value.charAt(i).toUpperCase() && isNaN(password.value.charAt(i)) && !charUpper) {
                    charUpper++;
                } else if (password.value.charAt(i) == password.value.charAt(i).toLowerCase() && isNaN(password.value.charAt(i)) && !charLower) {
                    charLower++;
                } else if (!isNaN(password.value.charAt(i)) && !charNumber) {
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
        if (confirmPassword.value != password.value && passwordLength != 0) {
            confirmPassword.classList.add("red-border");
            confirmPasswordAlert.innerHTML = "Passwords don't match.";
            confirmPassword.insertAdjacentElement('afterend', confirmPasswordAlert);
            buttonAlert[10] = "Confirm password: " + confirmPasswordAlert.innerHTML;
        } else {
            confirmPasswordAlert.innerHTML = "";
            confirmPassword.insertAdjacentElement('afterend', confirmPasswordAlert);
            buttonAlert[10] = "Confirm password: " + confirmPasswordAlert.innerHTML;
        }
        paramQuerys[9] = "password=" + password.value;
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
        if (!confirmPassword.value.length) {
            confirmPassword.classList.add("red-border");
            confirmPasswordAlert.innerHTML = "Password is required.";
            confirmPassword.insertAdjacentElement('afterend', confirmPasswordAlert);
            buttonAlert[10] = "Confirm password: " + confirmPasswordAlert.innerHTML;
        } else if (confirmPassword.value == password.value) {
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

    if (localStorage.getItem('id') != null) {
        firstName.value = localStorage.getItem("name");
        lastName.value = localStorage.getItem("lastName");
        documentNumber.value = localStorage.getItem("dni");
        date = localStorage.getItem("dob");
        dateOfBirthFormat = date.substring(6) + "-" + date.substring(0, 2) + "-" + date.substring(3, 5);
        dateOfBirth.value = dateOfBirthFormat;
        phoneNumber.value = localStorage.getItem("phone");
        address.value = localStorage.getItem("address");
        city.value = localStorage.getItem("city");
        postalCode.value = localStorage.getItem("zip");
        email.value = localStorage.getItem("email");
        password.value = localStorage.getItem("password");
        confirmPassword.value = localStorage.getItem("password");
    }

    function concatUrl(a, b) {
        var c = b.join("&");
        return a + c;
    }

    var signUpButton = document.getElementById("sign-up-button");
    var error = [];

    signUpButton.onclick = function () {
        firstName.onblur();
        lastName.onblur();
        documentNumber.onblur();
        dateOfBirth.onblur();
        phoneNumber.onblur();
        address.onblur();
        city.onblur();
        postalCode.onblur();
        email.onblur();
        password.onblur();
        confirmPassword.onblur();
        var buttonAlertString = [];
        for (i = 0; i < buttonAlert.length; i++) {
            buttonAlertString.push(buttonAlert[i]);
        }
        buttonAlertString = buttonAlertString.join("\n");
        alert(buttonAlertString);
        console.log(concatUrl(paramLink, paramQuerys));

        fetch(concatUrl(paramLink, paramQuerys))
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonResponse) {
                if (jsonResponse.success) {
                    console.log(jsonResponse.msg);
                    alert(jsonResponse.msg);
                    return data = jsonResponse.data;
                } else {
                    for (var i = 0; i < jsonResponse.errors.length; i++) {
                        error[i] = jsonResponse.errors[i].msg;
                    }
                    var errorString = error.join("\n");
                    throw new Error(errorString);
                }
            })
            .then(function (responseData) {
                storeLocalStorage(data);
                console.log(responseData);
                for (i = 0; i < responseData.length; i++) {
                    console.log(responseData[i]);
                }
            })
            .catch(function (error) {
                alert("Log in error \n " + error)
                console.log(error);
            })

        function storeLocalStorage(data) {
            localStorage.setItem("id", data.id);
            localStorage.setItem("name", data.name);
            localStorage.setItem("lastName", data.lastName);
            localStorage.setItem("dni", data.dni);
            localStorage.setItem("dob", data.dob);
            localStorage.setItem("phone", data.phone);
            localStorage.setItem("address", data.address);
            localStorage.setItem("city", data.city);
            localStorage.setItem("zip", data.zip);
            localStorage.setItem("email", data.email);
            localStorage.setItem("password", data.password);
        }
    }
}
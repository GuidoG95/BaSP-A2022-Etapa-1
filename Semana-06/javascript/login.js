window.onload = function() {
    // var email = document.getElementById("email");
    // var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    // if (email.emailExpression() == "true") {
    //     console.log("ok");
    // }
    // console.log(emailExpression());

    var password = document.getElementById("password");
    password.onblur = function() {
        var passwordLength = password.value.length;
        if(passwordLength > 0 && passwordLength < 8) {
            password.classList.add('red-border');
            alert("Password must have 8 or more characters.")
        }
        // for(i = 0, i < passwordLength, i++) {
            
        // }
    }
}
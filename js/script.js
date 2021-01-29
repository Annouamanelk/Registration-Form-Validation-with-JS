var username = document.getElementById("username");
var email = document.getElementById("email");
var countryCode = document.getElementById("countryCode");
var phone = document.getElementById("phone");
var password = document.getElementById("password");
var img = document.getElementsByTagName("img");
var submit = document.getElementById("submit");
var form = document.getElementById("form");

var x = false;
var y = false;
var z = false;
var w = false;

var patternUsername = /^[a-z]{4}[0-9]{4}$/i;
var patternEmail = /^[a-z\.\-0-9]+@[a-z\.\-]+\.(fr|com)$/i;
var patternPhone = /^\+(212|33)(6|7)[0-9]{8}$/;
var patternPassword1 = /^[a-zA-Z0-9@#!]{8,}$/;
var patternPassword2 = /[@#!]/;
var patternPassword3 = /[0-9]/g;

username.addEventListener("input", function (e) {
    e.target.value = e.target.value.toLowerCase()
    var usr = e.target.value;
    if (!patternUsername.test(usr)) {
        img[0].src = "img/reject.png";
        img[0].title = "Invalid Username : \n4 letters then 4 numbers !";
    } else {

        img[0].src = "img/check.png";
        img[0].title = "Checked !";
        x = true;

    }

})

email.addEventListener("input", function (e) {
    e.target.value = e.target.value.toLowerCase()
    var usr = e.target.value;
    if (patternEmail.test(usr)) {
        img[1].src = "img/check.png";
        img[1].title = "Checked !";
        y = true;
    } else {
        img[1].src = "img/reject.png";
        img[1].title = "Invalid Email !";
    }
})

phone.addEventListener("input", function (e) {
    if (e.target.value.substring(1, 3) == "33") {
        if (e.target.value.length == 3) e.target.value = e.target.value + " "
        else {
            if (e.target.value.length > 3 && e.target.value.length % 3 == 2 && e.target.value.length < 15) e.target.value = e.target.value + " "
        }
    } else if (e.target.value.substring(1, 4) == "212") {
        if (e.target.value.length == 4) e.target.value = e.target.value + " "
        else {
            if (e.target.value.length > 4 && e.target.value.length % 3 == 0 && e.target.value.length < 16) e.target.value = e.target.value + " "
        }
    }
    var usr = e.target.value.split(" ").join("");
    if (patternPhone.test(usr)) {
        img[2].src = "img/check.png";
        img[2].title = "Checked !";
        z = true;
    } else {
        img[2].src = "img/reject.png";
        img[2].title = "Invalid Phone Number : \n+(212/33)(7/6)XXXXXXXX !";
    }
})

password.addEventListener("input", function (e) {
    var usr = e.target.value;
    if (patternPassword1.test(usr) && usr.search(patternPassword2) != -1 && usr.match(patternPassword3).length >= 4) {
        img[3].src = "img/check.png";
        img[3].title = "Strong Password !\n" +
            "✔️ Must be at least 8 caracters long,\n" +
            "✔️ Must contain at least @ or ! or #,\n" +
            "✔️ Must contain at least 4 numbers!";
        w = true;
    } else {
        img[3].src = "img/reject.png";
        img[3].title = "Weak Password : \n";
        if (patternPassword1.test(usr)) {
            img[3].title += "✔️ Must be at least 8 caracters long,\n";

        } else {
            img[3].title += "❌ Must be at least 8 caracters long,\n";
        }
        if (usr.search(patternPassword2) != -1) {
            img[3].title += "✔️ Must contain at least @ or ! or #,\n"
        } else {
            img[3].title += "❌ Must contain at least @ or ! or #,\n"
        }
        if (usr.match(patternPassword3) != null && usr.match(patternPassword3).length >= 4) {
            img[3].title += "✔️ Must contain at least 4 numbers!";
        } else {
            img[3].title += "❌ Must contain at least 4 numbers!";
        }
    }
})

form.addEventListener("submit", function (e) {
    if (x && y && z && w) {
        form.action = "html/validation.html";
    } else {
        alert("You must fill all the fields properly !");
        e.preventDefault();
    }
})
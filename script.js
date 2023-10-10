const passwordBox = document.querySelector("#password");

const length = 8;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowercase = "abcdefghijklmnopqrstuvwxyz";

const number = "0123456789";

const symbols = "@$^";

const chars = uppercase + lowercase + number + symbols;

function createPassword() {
    let password = "";

    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}
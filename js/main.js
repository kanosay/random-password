let btn = document.querySelector('.generate');
let type = document.querySelector('.type');
let range = document.querySelector('.range');
const rangeTitle = document.querySelector('.rangeTitle');
let lenth = "";
lenth = Number(lenth);

range.addEventListener('input', function() {
    lenth = this.value;
    rangeTitle.textContent = "Range: " + lenth;
});




let randomiser = () => {
    let string = "ABCDEFGHIJKLMNOPQRSTUV";
    let lowerString = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let sym = "!#$%&()*+,-./:;<=>?@[]_{|}~";

    const allSym = string + lowerString + numbers + sym;
    let password = "";
    while (lenth > password.length) {
        password += allSym[Math.floor(Math.random() * allSym.length)];
    }
    type.value = password;
}

btn.addEventListener('click', randomiser);
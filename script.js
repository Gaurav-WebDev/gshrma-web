var textElement1 = document.getElementById("change-text1");
var textElement2 = document.getElementById("change-text2");

var textgroup1 = ["Hi!,", "Bonjour!,", "Hola!,", "Ciao!,", "Namaste!,"];
var textgroup2 = ["Web Developer",  "Freelancer", "Web Designer", "Problem Solver"];

var currentIndex1 = 0;
var currentIndex2 = 0;

function changeText() {
    textElement1.innerHTML = textgroup1[currentIndex1];
    textElement2.innerHTML = textgroup2[currentIndex2];

    currentIndex1 = (currentIndex1 + 1) % textgroup1.length;
    currentIndex2 = (currentIndex2 + 1) % textgroup2.length;
}

setInterval(changeText, 2500);

// Ham Menu JS

var ham = document.getElementById("ham");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var menu = document.getElementById("menu");

ham.addEventListener("click", ()=>{
    line1.classList.toggle("rotate");
    line2.classList.toggle("rotate2");
    menu.classList.toggle("close");
})







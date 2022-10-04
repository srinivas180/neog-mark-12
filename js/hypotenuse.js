var baseHTML = document.querySelector("#input-base");
var heightHTML = document.querySelector("#input-height");
var btnCalculateHypotenuse = document.querySelector(".btn-hypotenuse");
var output = document.querySelector(".output");

function calculateHypotenuse() {
    var base = baseHTML.value;
    var height = heightHTML.value;

    var hypotenuse = Math.sqrt((base * base) + (height * height));

    output.innerText = "Lenght of Hypotenuse is " + hypotenuse;
}

btnCalculateHypotenuse.addEventListener("click", calculateHypotenuse);
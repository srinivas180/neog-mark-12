var baseHTML = document.querySelector("#input-base");
var heightHTML = document.querySelector("#input-height");
var btnCalculateArea = document.querySelector(".btn-area");
var output = document.querySelector(".output");

function calculateArea() {
    var base = baseHTML.value;
    var height = heightHTML.value;

    var area = 0.5 * base * height;

    output.innerText = "Area of Triangle is " + area;
}

btnCalculateArea.addEventListener("click", calculateArea);
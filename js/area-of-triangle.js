var baseHTML = document.querySelector("#input-base");
var heightHTML = document.querySelector("#input-height");
var btnCalculateArea = document.querySelector(".btn-area");
var output = document.querySelector(".output");

function calculateArea() {
    var base = baseHTML.value;
    var height = heightHTML.value;

    if(base == '' || height == '')
    {
        output.innerText = "Please enter values in all fields."
    }
    else {
        if(base <= 0 || height <= 0) {
            output.innerText = "Please enter only positive values which are greater than zero in both fields."
        }
        else {
            var area = 0.5 * base * height;
    
            output.innerText = "Area of Triangle is " + area;
        }
    }
}

btnCalculateArea.addEventListener("click", calculateArea);
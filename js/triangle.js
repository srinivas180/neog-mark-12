var angles = document.querySelectorAll(".input");
var btnIsTriangle = document.querySelector(".btn-is-triangle");
var output = document.querySelector(".output");

function calculateSumOfAngles() {
    var sum = 0;
    angles.forEach((angle) => {
        sum = sum + parseInt(angle.value);
    });
    return sum;
}

function isTriangle() {
    
    if(angles[0].value === '' || angles[1].value === '' || angles[2].value === '') {
        output.innerHTML = "Please enter values in all fields";
    }
    else {
        var sumOfAngles = calculateSumOfAngles();
        if(sumOfAngles == 180) {
            output.innerText = "Given angles form a triangle";
        }
        else {
            output.innerText = "Given angles doesn't form a triangle";
        }
    }
}

btnIsTriangle.addEventListener("click", isTriangle);
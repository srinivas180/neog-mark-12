var formQuiz = document.querySelector(".form-quiz");
var btnSubmit = document.querySelector(".btn-submit");
var output = document.querySelector(".output");

var correctAnswers = ['90', 'right angled', '3', 'Equilateral triangle', 'a + b + c']

function calculateScore() {
    var score = 0;
    var index = 0;

    var userAnswers = new FormData(formQuiz).values();
    for(var userAnswer of userAnswers) {
        console.log("Correct Answer - " + (correctAnswers[index]));
        console.log("User Answer - " + (userAnswer))

        if(userAnswer === correctAnswers[index]){
            score++;
        }
        index++;
    }

    output.innerText = "Your score is " + score;
}

btnSubmit.addEventListener("click", calculateScore);
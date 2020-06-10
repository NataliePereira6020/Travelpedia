


function check(){

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var correct = 0;

        if (question1 == "Ulaanbaatar") {
            correct++;
        }
        if (question2 == "21.7 million") {
            correct++;
        }
        if (question3 == "True") {
            correct++;
        }
        if (question4 == "5") {
            correct++;
        }
        if (question5 == "1") {
            correct++;
        }
        if (question6 == "3") {
            correct++;
        }

    var message = ["Great job!", "That's just okay", "Better luck next time"];
    var pictures = ["img/message0.gif", "img/message1.gif", "img/message2.gif"]
        var range;
        if (correct < 3) {
            range = 2;
        }
        if (correct > 2 && correct < 4) {
            range = 1;
        }
        if (correct > 3) {
            range = 0 
        }

    document.getElementById("afterSubmit").style.visibility="visible"
    document.getElementById("message").innerHTML= message[range]
    document.getElementById("numberCorrect").innerHTML="You got " + correct + " correct";
    document.getElementById("picture").src = pictures[range];


} 
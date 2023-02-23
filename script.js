var body = document.body;
var highscoreBoxEl = document.createElement("div");
var highscoreButtonEl = document.createElement("button");
var center = document.createElement("div");
var cardEl = document.createElement("div");
var topEl = document.createElement("div");
var topTextEl = document.createElement("p");
var bottomEl = document.createElement("div");
var bottomTextEl = document.createElement("p");
var timerBoxEl = document.createElement("div");
var timerEl = document.createElement("p");
var Questiontracker = 1;
var scoretracker = 0;
var buttonElOne = document.createElement("button");
var buttonElTwo = document.createElement("button");
var buttonElThree = document.createElement("button");
var buttonElFour = document.createElement("button");
var entryField = document.createElement("input");
var enrtyFieldSubmit = document.createElement("button");
var seconds = 61;
var questionTracker = 1;
var end = 0;
var score = "";


body.appendChild(highscoreBoxEl);
highscoreBoxEl.appendChild(highscoreButtonEl);
highscoreButtonEl.textContent="Show Highscores";
highscoreButtonEl.setAttribute("style","background-color: white; border: none;")
body.appendChild(center);
center.setAttribute("style","width: 60%; display: flex; flex-wrap: wrap;")
center.appendChild(topEl);
topEl.setAttribute("style","width: 100%; height: 40%; display: flex; justify-content: center;");
topEl.appendChild(topTextEl);
topTextEl.setAttribute("style","align-self:end;");
center.appendChild(cardEl);
cardEl.setAttribute("style","width: 100%; height:20%; display: flex; flex-direction:column; justify-content: center; align-items: center");
center.appendChild(bottomEl);
bottomEl.setAttribute("style","width: 100%; height: 39%; display: flex; justify-content: center;");
bottomEl.appendChild(bottomTextEl);
bottomTextEl.setAttribute("style","align-self:baseline;");
body.appendChild(timerBoxEl);
timerBoxEl.appendChild(timerEl);
timerEl.setAttribute("style","float: right; margin-right:30px; ");



var questions = ["question 1 - Correct Answer 1","Question2 - Correct Answer 2",
                "Question3 - Correct Answer 1","Question4 - Correct Answer 3"];
var answer = [["1","2","3","4"],["1","2","3","4"],["1","2","3","4"],["1","2","3","4"]];


        
var startButton = document.createElement("button");
startButton.textContent = "Start";
bottomEl.appendChild(startButton);
startButton.addEventListener("click",function(){
    startButton.remove();
    
    function timer(){
        var timerTick = setInterval(function(){
        
            seconds--;
            timerEl.textContent = "Time: " + Math.floor(seconds);
            if (seconds === 0 || seconds < 0){
                clearInterval(timerTick);
                timerEl.remove();
    
            }
        },1000)
    }
    cardEl.appendChild(buttonElOne);
    cardEl.appendChild(buttonElTwo);
    cardEl.appendChild(buttonElThree);
    cardEl.appendChild(buttonElFour);
    timer();
    

    setInterval(function(){
        if(questionTracker == 1){
            if (seconds <= 0){
                buttonElOne.remove();
                buttonElTwo.remove();
                buttonElThree.remove();
                buttonElFour.remove();
                topTextEl.textContent = "";
                bottomTextEl.textContent ="";
                score ="0";
                questionTracker =5;
            }
            for(var i = 0; i < 4; i++){
                cardEl.children[i].textContent = answer[0][i];
            }
            topTextEl.textContent = questions[0];
            buttonElOne.addEventListener("click",function(){
                bottomTextEl.textContent = "correct";
                questionTracker = 2;
            });
            buttonElTwo.addEventListener("click",function(){
                seconds= seconds-.02;
                bottomTextEl.textContent = "incorrect";
            });
            buttonElThree.addEventListener("click",function(){
                seconds= seconds-.02;
                bottomTextEl.textContent = "incorrect";
            });
            buttonElFour.addEventListener("click",function(){
                seconds= seconds-.02;
                bottomTextEl.textContent = "incorrect";
            });
        }
        else if(questionTracker == 2){
            if (seconds <= 0){
                buttonElOne.remove();
                buttonElTwo.remove();
                buttonElThree.remove();
                buttonElFour.remove();
                topTextEl.textContent = "";
                bottomTextEl.textContent ="";
                score ="1";
                questionTracker =5;
            }
            for(var i = 0; i < 4; i++){
                cardEl.children[i].textContent = answer[1][i];
            }
            topTextEl.textContent = questions[1];
            buttonElOne.addEventListener("click",function(){
                seconds= seconds-.02;
                bottomTextEl.textContent = "incorrect";
            });
            buttonElTwo.addEventListener("click",function(){
                bottomTextEl.textContent = "correct";
                questionTracker = 3;
            });
            buttonElThree.addEventListener("click",function(){
                seconds= seconds-.02;
                bottomTextEl.textContent = "incorrect";
            });
            buttonElFour.addEventListener("click",function(){
                seconds= seconds-.02;
                bottomTextEl.textContent = "incorrect";
            });
        }
        else if(questionTracker == 3){
            if (seconds <= 0){
                buttonElOne.remove();
                buttonElTwo.remove();
                buttonElThree.remove();
                buttonElFour.remove();
                topTextEl.textContent = "";
                bottomTextEl.textContent ="";
                score ="2";
                questionTracker =5;
            }
            for(var i = 0; i < 4; i++){
                cardEl.children[i].textContent = answer[2][i];
            }
            topTextEl.textContent = questions[2];
            buttonElOne.addEventListener("click",function(){
                bottomTextEl.textContent = "correct";
                questionTracker = 4;
            });
            buttonElTwo.addEventListener("click",function(){
                seconds= seconds-.02;
                bottomTextEl.textContent = "incorrect";
            });
            buttonElThree.addEventListener("click",function(){
                seconds= seconds-.02;
                bottomTextEl.textContent = "incorrect";
            });
            buttonElFour.addEventListener("click",function(){
                seconds= seconds-.02;
                bottomTextEl.textContent = "incorrect";
            });
        }
        else if(questionTracker == 4){
            if (seconds <= 0){
                buttonElOne.remove();
                buttonElTwo.remove();
                buttonElThree.remove();
                buttonElFour.remove();
                topTextEl.textContent = "";
                bottomTextEl.textContent ="";
                score ="3";
                questionTracker =5;
            }
            for(var i = 0; i < 4; i++){
                cardEl.children[i].textContent = answer[3][i];
            }
            topTextEl.textContent = questions[3];
            buttonElOne.addEventListener("click",function(){
                seconds= seconds-.02;
                bottomTextEl.textContent = "incorrect";
            });
            buttonElTwo.addEventListener("click",function(){
                seconds= seconds-.02;
                bottomTextEl.textContent = "incorrect";
            });
            buttonElThree.addEventListener("click",function(){
                bottomTextEl.textContent = "correct!!";
                end = 1;
                if (end === 1){
                    buttonElOne.remove();
                    buttonElTwo.remove();
                    buttonElThree.remove();
                    buttonElFour.remove();
                    topTextEl.textContent = "";
                    bottomTextEl.textContent ="";
                    score = 4;
                }
                questionTracker = 5;
            });
            buttonElFour.addEventListener("click",function(){
                seconds= seconds-.02;
                bottomTextEl.textContent = "incorrect";
            });
        }
        else if (questionTracker === 5){
            timerEl.remove();
            topTextEl.textContent = "All done."
            cardEl.textContent="Your score is: " + score;
        } 
    }, 100);
    console.log(questionTracker);
});




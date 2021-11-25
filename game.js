const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('#choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
    

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []
let timeleft = 0;


let questions = [
 
    {
        "que": "Which attribute should have a tag in order to show a title tooltip as default?",
        "answer": "2",
        "choice1" : "It is not possible, you have to use JS",
        "choice2" : "Title attribute",
        "choice3" : "Tooltip attribute",
        "choice4" : "Name attribute",
    },
    {
        "que": "What is difference between ul and ol?",
        "answer": "1",
        "choice1" :  "OL element is a numbered list and UL is a list of points",
        "choice2" : "It is the same behavior",
        "choice3" : "None of these is a list",
        "choice4" : "UL element is a numbered list and ol is list of points "
    },
    {
        "que": "Which attribute should have a tag in order to show a title tooltip as default?",
        "answer": "2",
        "choice1" : "It is not possible, you have to use JS",
        "choice2" : "Title attribute",
        "choice3" : "Tooltip attribute",
        "choice4" : "Name attribute",
    },
    {
        "que": "What is difference between ul and ol?",
        "answer": "1",
        "choice1" :  "OL element is a numbered list and UL is a list of points",
        "choice2" : "It is the same behavior",
        "choice3" : "None of these is a list",
        "choice4" : "UL element is a numbered list and ol is list of points "
    },
    
];


const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]  //The spread operator is a useful and quick syntax for adding items to arrays, combining arrays or objects, and spreading an array out into a function’s arguments.
    getNewQuestion()
}

getNewQuestion = () => {
    
    bar.style.width = questionCounter * 100 / MAX_QUESTIONS + '%';

    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS)
    {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('end.html')
    }

    questionCounter++
    timeleft = 30;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    // progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length) // floor btafrit ceil b2ifrat

    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.que
    
    choices.forEach(choice => { const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]})

    availableQuestions.splice(questionsIndex, 1)
    
    acceptingAnswers = true

}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers)
        return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)   
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion()
    }, 1000)
})
})

var Timer = setInterval(function(){
  if(timeleft <= 0){
    // clearInterval(Timer);
    document.getElementById("timer").innerHTML = "timeout";
    getNewQuestion()
} else {
    document.getElementById("timer").innerHTML = timeleft + "s";
  }
  timeleft -= 1;
  document.getElementById('timeBar').style.width = Math.floor(timeleft * 100 / 30) + "%";
}, 1000);

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()

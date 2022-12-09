const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')


const questionElement = document.getElementById('question')

const answerButtons = document.getElementById('answer-buttons')

let randomQuestions, questionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    questionIndex++
    nextQuestion()
})

function startGame() {
console.log('Round started')
startButton.classList.add('hide')
randomQuestions = questions.sort(() => Math.random() - .5)
questionIndex = 0
questionContainerElement.classList.remove('hide')
nextQuestion()
}

function nextQuestion(){
    resetState()
    showQuestion(randomQuestions[questionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtons.appendChild(button)
    })
}



function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtons.firstChild) {
    answerButtons.removeChild
    (answerButtons.firstChild)
    }
}

function selectAnswer(e) {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtons.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
})
if (randomQuestions.length > questionIndex + 1) {
    nextButton.classList.remove('hide')
}else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'In 1960 who sung "I Got You Babe" with Sonny on live TV?',
        answers: [
            {text:'Cher', correct: true},
            {text:'Janet Jackson', correct: false},
            {text:'Joan Jett', correct: false},
            {text:'Stevie Nicks', correct: false}
        ]
    },
    {
        question: 'What year did Muse release their studio album "Black Holes and Relvelations"?',
        answers: [
            {text:'2001', correct: false},
            {text:'2003', correct: false},
            {text:'2006', correct: true},
            {text:'2009', correct: false}
        ]
    },
    {
        question: 'Who is not a fictional member of The Gorillaz',
        answers: [
            {text:'2-D', correct: false},
            {text:'Noodles', correct: false},
            {text:'Russel', correct: false},
            {text:'Darmon', correct: true}
        ]
    },
]
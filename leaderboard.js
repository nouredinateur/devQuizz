const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML =
highScores.map(score =>{
    return `<li class="shadow rounded-md bg-blue-500 text-white p-4 my-3">${score.name} - ${score.score}</li>`
}).join('')  // returns an array as a string.
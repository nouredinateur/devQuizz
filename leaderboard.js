const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML =
highScores.map(score =>{
    return `<li id="ranks" class="shadow rounded-md text-white p-4 my-3">${score.name} - ${score.score}</li>`
}).join('')  // returns an array as a string.
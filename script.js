

// function lunch(){
//         level = [];
//         numberOfquestions = 5; 
//         fetch("./data.json").then(response => {
//             return response.json();
//             var quiz = response.json();
//             }).then(
//                 function randomFive(data){
//                     var questions = data.quiz;
//                     var arr = [];
//                     while(arr.length < numberOfquestions){
//                         var r = Math.floor(Math.random() * (questions.length - 0));
//                         if(arr.indexOf(r) === -1) arr.push(r);
//                     }
//                     for(var i = 0; i <  arr.length; i++){
//                         level.push(questions[arr[i]]);
//                     }
//                     localStorage.setItem("questions", JSON.stringify(level));
//             });
// }

//     function nextQuestion(){
//         questions = JSON.parse(localStorage.getItem('questions'));
//         var x = 0;
//         console.log('entered');
//         questionID.innerHTML += questions[x].question;
//         var answers = questions[x].options;
//         var answer = questions[x].answer;
//         var optionID = answers.indexOf(answers[i]);
//             for(var i = 0 ; i < answers.length ; i++){
//                 var answerID = document.getElementById('answerID');
//                 var id = 'btn' + i;
//                 var redButton = `<button id="${id}" onclick="answer(this.value)" value="${optionID}" class=" w-full mx-auto bg-gray-100  m-5 p-3 w-4/5 rounded-full shadow text-lg focus:bg-red-700 focus:text-white hover:bg-black-900">` + answers[i]  + `</button>`;
//                 var greenButton = `<button id="${id}" onclick="answer(this.value)" value="${optionID}" class="  w-full mx-auto bg-gray-100  m-5 p-3 w-4/5 rounded-full shadow text-lg focus:bg-green-700 focus:text-white hover:bg-black-900">` + answers[i]  + `</button>`;
//                 if(answers.indexOf(answers[i]) == answer){
//                         answerID.innerHTML += greenButton;
//                         console.log('match!! answer is ' + answers.indexOf(answers[i]))
//                         }else{
//                             answerID.innerHTML += redButton;
//                         }
//                         console.log(answers.indexOf(answers[i]));
//                         console.log(answer);
//                         console.log(id);
//                     }
//                     console.log(questions[i]);
//                     x++;
//                     console.log('x is ' + x);
//         }
//         function answer(value){
//             if(value === answer){
//                 console.log('congraaats ur right')
//             }else{
//                 console.log('value :' + value );
//             }
//         }
//     function session(){
//         pad.style.display = "none";
//         quiz.style.display = "block";
//         lunch();
//             // function nextQuestion(){
//             //     questionID.innerHTML += questions[i].question;
//             //     answers = questions[i].options;
//             //     answer = questions[i].answer;
//             // }
//             // for(var i = 0; i < questions.length; i++){ 
//         nextQuestion();
//             // }
// }
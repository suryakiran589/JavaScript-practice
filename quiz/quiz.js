

const quizQuestions = [
    {
      q: "Which of the following is used to declare a variable in JavaScript?",
      options: ["var", "let", "const", "All of the above"],
      correct: "All of the above"
    },
    {
      q: "What will `typeof []` return?",
      options: ["array", "object", "undefined", "string"],
      correct: "object"
    },
    {
      q: "Which function is used to print something in the console?",
      options: ["log()", "console.log()", "print()", "display()"],
      correct: "console.log()"
    },
    {
      q: "How do you write an arrow function in JavaScript?",
      options: [
        "function() => {}",
        "() => {}",
        "function => {}",
        "{} => function"
      ],
      correct: "() => {}"
    },
    {
      q: "Which method is used to add an element to the end of an array?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correct: "push()"
    }
  ];
  
//   console.log(quizQuestions);


function display(i){
let question =document.getElementById("qs")
let op =document.getElementById("option")
question.innerText=quizQuestions[i].q
op.innerHTML=""
quizQuestions[i].options.forEach
((o,index)=> {
    let li = document.createElement("li");
    li.innerHTML = `
      <input id="op${index}" type="radio" name="one-op" value="${o}">
      <label for="op${index}">${o}</label>
    `;
    op.appendChild(li);
    
})}
let i=1
display(i)
function send(){
    if (i < quizQuestions.length)
    {

        display(++i)
    }
    console.log("clicked")

}

  
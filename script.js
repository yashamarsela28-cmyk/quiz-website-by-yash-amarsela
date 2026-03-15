const quiz = [
  {
    question: "HTML stands for?",
    A: "Hyper Trainer Marking Language",
    B: "Hyper Text Markup Language",
    C: "Hyper Text Marketing Language",
    D: "Hyper Tool Markup Language",
    correct: "B"
  },
  {
    question: "CSS is used for?",
    A: "Styling",
    B: "Programming",
    C: "Database",
    D: "Server",
    correct: "A"
  },
  {
    question: "JavaScript is primarily used for?",
    A: "Server-side programming",
    B: "Styling webpages",
    C: "Interactive webpages",
    D: "Database management",
    correct: "C"
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  document.getElementById("question").innerText = quiz[current].question;
  document.getElementById("A").innerText = quiz[current].A;
  document.getElementById("B").innerText = quiz[current].B;
  document.getElementById("C").innerText = quiz[current].C;
  document.getElementById("D").innerText = quiz[current].D;
}

function checkAnswer(ans) {
  if(ans === quiz[current].correct) score++;
  current++;
  if(current < quiz.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML = "<h2>Quiz Finished!</h2>";
    document.getElementById("score").innerText = "Your Score: " + score + "/" + quiz.length;
    // Developer name still visible
    let dev = document.createElement("p");
    dev.id = "developer";
    dev.innerText = "Developed by Yash Amarsela";
    document.body.appendChild(dev);
  }
}

loadQuestion();

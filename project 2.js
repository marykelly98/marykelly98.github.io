document.addEventListener('DOMContentLoaded', function() {
  let correctAnswerCounter = 0
  var finalScore = correctAnswerCounter*4

  function recordAnswers() {
    document.querySelector("#question1correctanswer").onclick = function() {
      correctAnswerCounter = correctAnswerCounter + 1
      document.querySelector("#question1result").innerHTML = "You are correct!"
    }
    document.querySelector(".question1wronganswer").onclick = function() {
      document.querySelector("#question1result").innerHTML = "Nope. Wrong answer."
    }
    document.querySelector("#question2correctanswer").onclick = function() {
      correctAnswerCounter = correctAnswerCounter + 1
      document.querySelector("#question2result").innerHTML = "You are correct!"
    }
    document.querySelector(".question2wronganswer").onclick = function() {
      document.querySelector("#question2result").innerHTML = "Nope. Wrong answer."
    }

    let useranswer = document.querySelector("#question3answer").value;
    if(useranswer == "HTML") {
      document.querySelector("#question3result").innerHTML = "You are correct!"
    }
    else {
      document.querySelector("#question3result").innerHTML = "Nope. Wrong answer."
    }

    document.querySelector("#question4correctanswer").onclick = function() {
      correctAnswerCounter = correctAnswerCounter + 1
      document.querySelector("#question4result").innerHTML = "You are correct!"
    }
  }

  recordAnswers();

  function showScore() {
    document.querySelector("h1").innerHTML = `Your score is ${finalScore}`
  }

  document.querySelector("#submit-button").onclick = showScore()
})

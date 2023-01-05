class InterfaceGame {

    showScreen(screenName) {
        let screens = document.querySelectorAll('#playGame > div');
        screens.forEach( (screen) => {
            screen.style.display = 'none';
        });
        let currentScreen = document.getElementById(screenName);
        currentScreen.style.display = 'block';
    }

    clickButtonStart(callback) {
        let buttonStart = document.getElementById('buttonStart');
        buttonStart.addEventListener('click', callback);
    }

    showGame(question) {
        document.getElementById('questions').innerHTML = question.question;
        document.getElementById('answer1').innerHTML = question.answers[0];
        document.getElementById('answer2').innerHTML = question.answers[1];
        document.getElementById('answer3').innerHTML = question.answers[2];
        document.getElementById('answer4').innerHTML = question.answers[3];
    }

    onClickAnswer(callback) {
        document.getElementById('answer1').addEventListener('click', () => callback(0) );
        document.getElementById('answer2').addEventListener('click', () => callback(1) );
        document.getElementById('answer3').addEventListener('click', () => callback(2) );
        document.getElementById('answer4').addEventListener('click', () => callback(3) );
    }

    setSelectedAnswer(answers) {
        let answerIndex = answers + 1;
        let answerDiv = document.getElementById('answer' + answerIndex);
        answerDiv.style.backgroundColor = 'blue';
        answerDiv.style.color = 'white';
    }

    resetAnswerStyle() {
        for (let i=1; i<=4; i++){
            document.getElementById('answer' + i).style.backgroundColor = 'white';
            document.getElementById('answer' + i).style.color = 'black';
        }
    }

    showCorrectAnswer(wrongAnswer, correctAnswer) {
        let wrongAnswerIndex = wrongAnswer + 1;
        let correctAnswerIndex = correctAnswer + 1;
        document.getElementById('answer' + wrongAnswerIndex).style.backgroundColor = 'red';
        document.getElementById('answer' + correctAnswerIndex).style.backgroundColor = 'orange';
    }
}
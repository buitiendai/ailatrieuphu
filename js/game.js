const questions = [
    { question: 'Câu 1: Nhân vật chị Dậu trong tác phẩm "Tắt đèn" của Ngô Tất Tố có tên thậ là gì?',
    answers: [
        'A: Lê Thị Đào',
        'B: Lê Thị Mai',
        'C: Lê Thị Xuân',
        'D: Lê Thị Lan'
    ],
    correct: 0
},
{ question: 'Câu 2: Theo một câu hát thì: "Ba thương con vì con giống mẹ. Mẹ thương con vì con giống ..." ai?',
    answers: [
        'A: Ông hàng xóm',
        'B: Bác đầu ngõ',
        'C: Ba',
        'D: Chú sau nhà'
    ],
    correct: 2
},
{ question: 'Câu 3: Người ta thường nấu canh cua với thứ gì?',
    answers: [
        'A: Củ cải',
        'B: Rau đay',
        'C: Mộc nhĩ',
        'D: Xúp lơ xanh'
    ],
    correct: 1
},
{ question: 'Câu 4: Đâu là tên một loại mũ?',
    answers: [
        'A: Lưỡi hái',
        'B: Lưỡi trai',
        'C: Lưỡi lê',
        'D: Lưỡi rắn'
    ],
    correct: 1
}

];

class GamePlay {
    constructor() {
        this.interfaceGame = new InterfaceGame();
        this.interfaceGame.showScreen('startGame');
        this.currentQuestion = 0;
        this.currentAnswer = null;
        this.nextQuestion = new SoundGame('nextquestion.mp3');
        this.thinking = new SoundGame('thinking.mp3');
        this.chooseAnswer = new SoundGame('chooseanswer.mp3');
        this.trueAnswer = new SoundGame('trueanswer.mp3');
        this.wrongAnswer = new SoundGame('wronganswer.mp3');
        this.interfaceGame.clickButtonStart( () => {
            this.start();
        });
    }

    start() {
        this.interfaceGame.showScreen('showQuestion');
        this.interfaceGame.resetAnswerStyle();
        this.nextQuestion.start( () => {
            this.thinking.start();
        });
        this.interfaceGame.showGame(questions[this.currentQuestion]);
        this.interfaceGame.onClickAnswer( (answers) => {
            this.currentAnswer = answers;
            this.interfaceGame.setSelectedAnswer(answers);
            this.nextQuestion.stop();
            this.thinking.stop();
            this.chooseAnswer.start( () => {
                this.checkAnswer();
            });
        });
    }

    checkAnswer() {
        if(this.currentAnswer == questions[this.currentQuestion].correct) {
            this.interfaceGame.showCorrectAnswer(this.currentAnswer, questions[this.currentQuestion].correct);
            this.trueAnswer.start( () => {
                alert('Xin chúc mừng, bạn đã trả lời đúng. Chúng ta sẽ đến với câu hỏi tiếp theo');
                this.currentQuestion++;
                this.start();
            });
        }else {
            this.interfaceGame.showCorrectAnswer(this.currentAnswer, questions[this.currentQuestion].correct);
            this.wrongAnswer.start( () => {
                alert('Cảm ơn bạn đã tham gia Ai là triệu phú, chúc bạn nhiều sức khỏe và thành công trong cuộc sống. Tiếp theo xin mời người chơi khác');
                this.reset();
            });
            
        }
    }

    reset() {
        this.interfaceGame.showScreen('startGame');
        this.currentQuestion = 0;
        this.interfaceGame.resetAnswerStyle();
    }
}

let game = new GamePlay();
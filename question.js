class Question {
    constructor(question){
        this.currentQuestionDom = document.getElementById('question');
        this.answersDom = [
            document.getElementById('a1'),
            document.getElementById('a2'),
            document.getElementById('a3'),
            document.getElementById('a4'),
        ]
        this.question = question.question;

        let fix = document.getElementById('forFix');
        fix.innerHTML = question.correct_answer;
        this.correctAnswer = fix.innerHTML;
        fix.innerHTML = ""

        this.choosedAnswer = '';
        this.answers = this.shuffleAnswer([this.correctAnswer, ...question.incorrect_answers]);
        this.isCorrect = false;
    }



    render(){
        this.currentQuestionDom.innerHTML = this.question.trim();
        this.question = this.currentQuestionDom.innerHTML;

        for(let i = 0 ; i < this.answersDom.length ; i++){
            this.answersDom[i].innerHTML = `<input type="radio" name="radio" value = "${this.answers[i]}">
            <span class="checkmark"></span>${this.answers[i]}`;


        }



    }

    shuffleAnswer(answers){
        for(let i = 0 ; i < answers.length ; i++){
            let j = Math.floor(Math.random() * answers.length);
            let temp = answers[i];
            answers[i] = answers[j]; 
            answers[j] = temp;
        }


        return answers;
    }

    answerQuestion(){
            let selectedAnswer = this.answersDom.filter(it => {
                return it.firstChild.checked;
            });
    
            if(selectedAnswer.length === 1){
                this.choosedAnswer = selectedAnswer[0].firstChild.value.trim();
                if(selectedAnswer[0].firstChild.value.trim() === this.correctAnswer.trim()){
                    this.isCorrect = true;
                }
                return true; // if one answer is selected       
            }

            
            else 
                return false; // no answer is selected


    }

    getIsCorrect(){
        return this.isCorrect;
    }

    static getUserCorrectAnswers(){
        return Question.userCorrectAnswers;
    }


}


export default Question
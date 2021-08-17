import Question from "./question.js"
import Final from "./final.js"

class Quiz {
    constructor(quizDom, questions, numberOfQuestions){
     /*================ Dom variables ================ */
     this.currentQN = document.getElementById('currentQN');
     this.QN = document.getElementById('QN').innerHTML = numberOfQuestions;
     this.nextBtnDom = document.getElementById('next');
     this.quizDom = quizDom;this.quizDom.style.display = "block";
     this.finalDom = document.getElementsByClassName('final')[0];



        


    /*================ member variables ================ */
        this.userCorrectAnswers = 0;
        this.questions = questions.map(que => {
            return new Question(que);
        })
        this.numberOfQuestions = numberOfQuestions;
        this.answeredQuestions= 0;


        /*================ Execute ================ */

        this.nextBtnDom.addEventListener('click', this.getNextQuestion.bind(this));
        this.render();


    }
        /*================ Memeber Functions ================ */

    render(){
        this.questions[this.answeredQuestions].render();
        this.currentQN.innerHTML = `${this.answeredQuestions + 1}`
    }

    getNextQuestion(){
        if(!this.questions[this.answeredQuestions].answerQuestion())
            return; // no answer is selected
        if(this.questions[this.answeredQuestions].getIsCorrect())
            this.userCorrectAnswers++;
        
        if(++this.answeredQuestions < this.numberOfQuestions){
            this.render();
        }else{
            this.showResult();
        }


    }

    getWrongAnsweredQuestions(){
        return this.questions.filter(it=>{
            return !(it.isCorrect);
        })
    }
    showResult(){
        let wrongAnsweredQuestions = this.getWrongAnsweredQuestions()
        this.quizDom.style.display = "none";
        new Final(this.finalDom, this.userCorrectAnswers, this.QN, wrongAnsweredQuestions);
    }
}


export default Quiz;
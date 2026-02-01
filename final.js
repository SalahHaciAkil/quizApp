

class Final{

    constructor(finalDom, solvedQuestions, allQuestions, wrongAnsweredQuestions){
        console.log('weong',wrongAnsweredQuestions);
        this.finalDom = finalDom;
        this.finalDom.style.display = "flex";
        this.solvedQuestions = solvedQuestions;
        this.allQuestions = allQuestions;
        this.wrongAnsweredQuestions = wrongAnsweredQuestions;




        this.solvedQuestionsDom = document.getElementById('solvedQuestions');
        this.wrongQuestions = document.getElementById('wrongQuestions');
        this.allQuestionsDom = document.getElementById('allQuestions');
        this.tryBtnDom = document.getElementById('try');

        this.tryBtnDom.addEventListener('click', this.tryAgain.bind(this))
        this.setResult();
    }

    setResult(){
        for(let i = 0 ; i < this.wrongAnsweredQuestions.length ; i++){
            this.wrongQuestions.innerHTML += ` <h2 class = 'mt' id="fQuestion">${this.wrongAnsweredQuestions[i].question}</h2>
            <p>You choosed: <span class = 'wrong_answer'>${this.wrongAnsweredQuestions[i].choosedAnswer}</span>Correct Answer: <span class = "correct_answer">${this.wrongAnsweredQuestions[i].correctAnswer}</span></p>`
        }
        
        this.solvedQuestionsDom.innerHTML = this.solvedQuestions;
        this.allQuestionsDom.innerHTML = this.allQuestions;
    }

    tryAgain(){
        document.location.reload();
    }

}

export default Final
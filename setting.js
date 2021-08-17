import Quiz from "./quiz.js"

class Setting {
    constructor(){
        /*================ Dom variables ================ */
        this.setting = document.getElementsByClassName('setting')[0];
        this.quizDom = document.getElementsByClassName('quiz')[0];
        this.category = document.getElementById("category");
        this.diffculty = [
            document.getElementById('easy'),
            document.getElementById('medium'),
            document.getElementById('hard')
        ]
        this.numberOfQuestions = document.getElementById('questions');
        this.startBtn = document.getElementById('start');


        /*================ Execute ================ */


        this.startBtn.addEventListener('click', this.startQuiz.bind(this));

    }



        /*================ Memeber Functions ================ */


    async startQuiz(){
        try{
            const amout = this.getNumOfQuestions();
            const diffculty = this.getDiffuclty();
            const category = this.getCategory();
           // const url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}&type=multiple`;
            let url = `https://opentdb.com/api.php?amount=${amout}&category=${category}&difficulty=${diffculty}&type=multiple`
            const data = await this.fetchData(url);
            this.toggleElements();
            new Quiz(this.quizDom ,data.results, amout);
        }catch(error){
            alert(error);
        }
    }

   async fetchData(url){
        const respone =await  fetch(url);
        const json =await respone.json();
        return json;
    }

    toggleElements(){
        this.setting.style.display = "none";
    }

    getDiffuclty(){
        let selectedDiffuclty = this.diffculty.filter(option => {
            return option.checked;
        })

        if(selectedDiffuclty.length === 1){
            return selectedDiffuclty[0].id;

        }else {
            throw new Error('select diffculty');
        }


    }

    getCategory(){
        const cate = this.category.value;
        if(cate === '')
            throw new Error('enter category');
        else
            return cate;         
    }

    getNumOfQuestions(){
    const numOfQuestions = parseInt(this.numberOfQuestions.value);
        if(!(numOfQuestions > 0 && numOfQuestions < 30)){
            throw new Error('put relaistic num of questions');
        }else{
            return numOfQuestions+'';
        }     

    }

}

export default Setting;
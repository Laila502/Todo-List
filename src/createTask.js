function createTask(){
    function makeTask(task){
        this.task = task
    }

    function getInputText(){
        const submit = document.querySelector('#submit');
        const input = document.querySelector('#input');
        let inputText;

        submit.addEventListener('click', () => {
            e.preventDefault();
            inputText = input.textContent;
        })

        console.log(inputText)

    }




}
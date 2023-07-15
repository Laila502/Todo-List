import './style.css';
import { showInbox } from './inbox';
import { deleteTask } from './deleteTask';
import { check } from './check';
import { toggleElements } from './toggleElements';


showInbox()
deleteTask()



toggleElements()


    function Task(task){
        this.task = task
    }

    const input = document.getElementById("input").value;



function showTask(){
    const taskBox = document.querySelector('.task-box');
    const task = document.createElement('div');
    task.className = 'task';
    task.innerHTML = `
    <div class="checkbox"></div>
    <p class="task-text">Ut enim ad minima veniam</p>
    <input type="date" id="date" >
    <img src="/img/bin.png" alt="" class="bin" >
`

    taskBox.appendChild(task)

    
}


showTask()

check()
function getInputText(){
    const submit = document.querySelector('#submit');
    // const input = document.querySelector('#input');
    let inputText;

    document.getElementById("myForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const input = document.getElementById("input").value;
        const task = new Task(input)
        console.log(task)
        
    });

    
    

}



getInputText()


function toggleElements(){
    const addTask = document.querySelector('#addTask');
    const inputAddTask = document.querySelector('#inputAddTask');
    const submitBtn = document.querySelector("#submit");

    addTask.addEventListener('click', () => {
        addTask.classList.toggle('hidden');
        inputAddTask.classList.toggle('hidden');
    })

    submitBtn.addEventListener('click', () => {
        addTask.classList.toggle('hidden');
        inputAddTask.classList.toggle('hidden');
    })
}

export {toggleElements};
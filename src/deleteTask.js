function removeElement(e){
    e.target.parentElement.remove()
}

function deleteTask(){
    let bin = document.querySelectorAll('.bin');
    bin.forEach(el => el.addEventListener('click', e => {
        removeElement(e)
        }));
}


export {deleteTask, removeElement};
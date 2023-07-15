function showInbox(){
    const inbox = document.querySelector('.inbox');
    const name = document.querySelector('.name');

    inbox.addEventListener('click', () => {
        name.textContent = "Inbox";
    });

    
}



export {showInbox};


function check(){
    const checkbox = document.querySelectorAll('.checkbox');

    checkbox.forEach(el => el.addEventListener('click', e => {
        if (e.target.classList.contains('checked')){
            e.target.classList.remove('checked');
        }else e.target.classList.add('checked');
        
        }));
}

export {check}
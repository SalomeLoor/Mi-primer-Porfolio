const openModal = document.getElementById('open-modal');
const modal = document.querySelector('.modal');
const closeModal = document.getElementById('close-modal');
let isOpen = false ;

openModal.addEventListener('click', () => {
    isOpen = !isOpen;
    if(isOpen){
        modal.style.display = 'inline-flex'
    } else {
        modal.style.display = 'none';
    }
});
closeModal.addEventListener('click', () => {
    isOpen = !isOpen;
    modal.style.display = 'none';
});

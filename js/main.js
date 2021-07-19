const loginBtn = document.querySelector('.login-btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close')

const openModal = () => {
    modal.style.display = 'block';
}

const closeModal = () => {
    modal.style.display = 'none';
}

const outsideClick = (event) => {
    if (event.target === modal){
        closeModal()
    }
}

loginBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
// Get DOM Elements
const modal = document.querySelector('#modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

//  Add Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// OpenModal function
function openModal() {
    modal.style.display = 'block';
}

// CloseModal Function
function closeModal() {
    modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
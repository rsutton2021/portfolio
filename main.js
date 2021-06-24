/*===================================== 
======== MENU CLOSE FUNCTION ==========
=====================================*/
function toggle() {
    let menuClose = document.getElementById('nav-toggle');
    menuClose.checked = false;
}

/*===================================== 
======== PROJECTS INFO POPUP ==========
=====================================*/

const openPopupButtons = document.querySelectorAll('[data-modal-target]');
const closePopupButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('popup-overlay');

openPopupButtons.forEach (button => {
    button.addEventListener('click', () => {
        const popup = document.querySelector(button.dataset.modalTarget)
        openModal(popup)
    })
});

overlay.addEventListener('click', () => {
    const popups = document.querySelectorAll('.modal.active')
    popups.forEach(popup => {
        closePopupButtons(popup)
    })
});

function openPopup(popup) {
    if (popup === null) return
    popup.classList.add('active')
    overlay.classList.add('active')
}

function closePopup(popup) {
    if (popup === null) return
    popup.classList.remove('active')
    overlay.classList.remove('active')
}
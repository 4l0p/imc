export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal h2'),
    buttonClose: document.querySelector('.close'),
    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}

Modal.buttonClose.addEventListener('click', () => Modal.close())

window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        Modal.close()
    }
})
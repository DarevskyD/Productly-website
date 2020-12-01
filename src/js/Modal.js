function modal() {
    const date = document.querySelector('.modal__date'),
        closeIcon = document.querySelector('.ico_close'),
        modal = document.querySelector('.modal'),
        overlayModal = document.querySelector('.overlay-modal'),        
        buttonOpenModal = document.querySelectorAll('.button_open_modal');      


    const options = {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
    };

    const today = new Date();
    date.innerHTML = today.toLocaleDateString("en-US", options);
 
    function openModal() {
        buttonOpenModal.forEach((item) => {
            item.addEventListener('click', () => {
                modal.style.display = 'block';
                overlayModal.classList.add('overlay-body');
                document.body.classList.add('scroll-body');
            });
        })                
    };

    function closeModal() {
        closeIcon.addEventListener('click', () => { 
            close();                             
        });

        overlayModal.addEventListener('click', () => {
            close();
        });        
    };   

    function close() {
        modal.style.display = 'none';
        overlayModal.classList.remove('overlay-body');
        document.body.classList.remove('scroll-body');  
    }
    
    openModal();
    closeModal();    
}

module.exports = modal;
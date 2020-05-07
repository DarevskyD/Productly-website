function sidebar() {

    const menuIconHamburger = document.querySelectorAll('.header__hamburger')[0],
        menuIconSidebarHamburger = document.querySelectorAll('.header__hamburger')[1],
        overlayBody = document.querySelector('.overlay-sidebar'),
        sideBar = document.querySelector('.sidebar');


    function openSidebar() {
        menuIconHamburger.addEventListener('click', () => {
            menuIconHamburger.classList.toggle('change');
            sideBar.classList.toggle('change');
            overlayBody.classList.add('overlay-body');
            document.body.classList.add('scroll-body');
        });
    }

    function closeSidebar() {
        menuIconSidebarHamburger.addEventListener('click', () => {
            close();
        });

        sideBar.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('sidebar__link')) {
                close();
            }
        });

        overlayBody.addEventListener('click', () => {
            close();
        });
    }

    function close() {
        sideBar.classList.toggle('change');
        menuIconHamburger.classList.toggle('change');
        overlayBody.classList.remove('overlay-body');
        document.body.classList.remove('scroll-body');
    }

    openSidebar();
    closeSidebar();
}

module.exports = sidebar;
 const menuButton = document.getElementById('menu-button');
        const menu = document.getElementById('menu');
        const menuCloseButton = document.getElementById('menu-close');
        const body = document.querySelector('body');

        menuButton.addEventListener('click', () => {
            menu.classList.add('menu-open');
            body.classList.add('overflow-hidden');
            console.log("hejehejehej")
        });

        menuCloseButton.addEventListener('click', () => {
            menu.classList.remove('menu-open');
            body.classList.remove('overflow-hidden');
        });

        document.addEventListener('click', (event) => {
            if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
                menu.classList.remove('menu-open');
                body.classList.remove('overflow-hidden');
            }
        });
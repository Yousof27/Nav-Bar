let links = document.querySelectorAll('header nav ul li');
let logo = document.querySelector('header .logo');
let header = document.querySelector('header');
let sel = document.querySelector('header .sel');
let content = logo.parentElement;
let nav = logo.nextElementSibling;

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(e => {
            e.classList.remove('active');
        })
        link.classList.add('active');
    })
})

logo.addEventListener('click', () => {
    if (window.innerWidth >= 600) {
        if (header.classList.contains('close')) {
            content.style.cssText = 'width: 64px; border-radius: 50px; left: 50%; transform: translateX(-50%);';
            setTimeout(() => {
                content.style.cssText = 'width: 568px';
            }, 800)
        } else {
            content.style.cssText = 'width: 64px; border-radius: 50px;';
            setTimeout(() => {
                content.style.cssText = 'width: 64px; border-radius: 50px; left: 60px';
            }, 800)
        }
        header.classList.toggle('close');
    } else {
        if (nav.classList.contains('mobile-close')) {
            nav.style.cssText = "height: 0px";
        }
        else {
            nav.style.cssText = "height: 305px";
        }
        nav.classList.toggle('mobile-close');
    }
})


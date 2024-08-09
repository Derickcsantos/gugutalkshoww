document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o elemento searchForm existe antes de adicionar o event listener
    let searchForm = document.querySelector('.search-form');
    if (searchForm) {
        document.querySelector('#search-btn').onclick = () => {
            searchForm.classList.toggle('active');
        };
        window.onscroll = () => {
            searchForm.classList.remove('active');
        };
    } else {
        console.error('Elemento .search-form não encontrado.');
    }

    // Verifica se o elemento menu-toggle existe antes de adicionar o event listener
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const mobileMenu = document.querySelector('.mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.toggle('active');
            } else {
                console.error('Elemento .mobile-menu não encontrado.');
            }
        });
    } else {
        console.error('Elemento #menu-toggle não encontrado.');
    }

    // jQuery para scroll e Owl Carousel
    $(window).scroll(function() {
        // Navbar-bottom scrolling
        if (this.scrollY > 5) {
            $('.navbar-bottom').addClass("sticky");
        } else {
            $('.navbar-bottom').removeClass("sticky");
        }

        // Scrolling Button Btn
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    });

    // Owl Carousel initialization
    $('.owl-carousel').owlCarousel({
        margin: 5,
        navigation: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000, // Corrigido de autoplayTimeOut para autoplayTimeout
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

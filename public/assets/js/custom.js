$(function () {

    // Header Scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 60) {
            $("header").addClass("fixed-header");
        } else {
            $("header").removeClass("fixed-header");
        }
    });


    // Carousels are now handled in their respective React components
    // for better reliability in Next.js

    // ScrollToTop
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const scrollToTopBtn = document.getElementById("scroll-top");
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener("click", (e) => {
            e.preventDefault();
            scrollToTop();
        });
    }

    window.onscroll = function () {
        const btn = document.getElementById("scroll-top");
        if (btn) {
            if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
                btn.style.display = "flex";
            } else {
                btn.style.display = "none";
            }
        }
    };


    // Aos
	AOS.init({
		once: true,
	});

});


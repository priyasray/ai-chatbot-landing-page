document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(".FAQ_section_FAQs_QA_content");

    faqItems.forEach(faq => {
        const iconWrapper = faq.querySelector(".FAQ_section_FAQs_QA_content_i");

        iconWrapper.addEventListener("click", () => {

            faqItems.forEach(item => {
                if (item !== faq) {
                    item.classList.remove("active");
                };
            });

            faq.classList.toggle("active");
        });
    });

    window.addEventListener("scroll", function () {
        const navBar = this.document.querySelector(".navbar");
        if (this.window.scrollY > 50) {
            navBar.classList.add("navScrolled");
        } else {
            navBar.classList.remove("navScrolled");
        };
    });

    const menuIcon = document.querySelector(".nav_menu_icon")

    menuIcon.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(".nav_sections_mobile").classList.toggle(
            "active"
        );

        document.querySelector(".nav_menu_icon").classList.toggle(
            "active"
        );

        document.querySelector(".nav_menu_icon_2").classList.toggle(
            "active"
        );
    });

    const menuIcon2 = document.querySelector(".nav_menu_icon_2")
    menuIcon2.addEventListener("click", function () {
        const menuIcon = document.querySelector(".nav_menu_icon")
        const navMobile = document.querySelector(".nav_sections_mobile");
        menuIcon2.classList.remove("active");
        menuIcon.classList.remove("active");
        navMobile.classList.remove("active");
    })

    const sections = document.querySelectorAll(".nav_sections_mobile_div2_section")

    sections.forEach(section => {
        section.addEventListener("click", function () {
            const navMobile = document.querySelector(".nav_sections_mobile");
            const menuIcon2 = document.querySelector(".nav_menu_icon_2")
            navMobile.classList.remove("active");
            menuIcon2.classList.remove("active");
            menuIcon.classList.remove("active");
        });
    });

});

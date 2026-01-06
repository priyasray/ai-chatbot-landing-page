document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(".FAQ_section_FAQs_QA_content");

    faqItems.forEach(faq => {
        const iconWrapper = faq.querySelector(".FAQ_section_FAQs_QA_content_i");

        iconWrapper.addEventListener("click", () => {

            faqItems.forEach(item => {
                if (item !== faq) {
                    item.classList.remove("active");
                }
            });

            faq.classList.toggle("active");
        });
    });

    window.addEventListener("scroll", function() {
        const navBar = this.document.querySelector(".navbar");
        if (this.window.scrollY > 50){
            navBar.classList.add("navScrolled")
        } else {
            navBar.classList.remove("navScrolled")
        }
    })
});

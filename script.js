const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        if(!(faq.classList.contains("active"))){
        faqs.forEach(faq => faq.classList.remove("active"))};
        faq.classList.toggle("active");
    });
});

const input_label = document.getElementById("input1");
input_label.addEventListener("focus", () => {
    input_label.classList.add("active");
});
input_label.addEventListener("blur", () => {
    input_label.classList.remove("active");
});

const input_label1 = document.getElementById("input2");
input_label1.addEventListener("focus", () => {
    input_label1.classList.add("active");
});
input_label1.addEventListener("blur", () => {
    input_label1.classList.remove("active");
});
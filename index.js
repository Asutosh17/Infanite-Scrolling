
const container = document.querySelector(".container");

const loadContent = (Student = 25) => {
    let i = 1;
    while (i <= Student) {
        const para = document.createElement("p");
        para.innerHTML = `MASAI STUDENT ${Math.floor(Math.random() * 100)}`;
        container.appendChild(para);
        i++;
    }
};

loadContent();
window.addEventListener("scroll", () => {
    if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
    ) {
        loadContent();
    }
});



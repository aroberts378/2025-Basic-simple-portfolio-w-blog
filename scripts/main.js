import './styles.css';

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth',
            block: 'center',

        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.createElement("button");
    backButton.textContent = "← Back to Blog";
    backButton.style.margin = "20px";
    backButton.style.padding = "10px";
    backButton.style.border = "none";
    backButton.style.background = "#0077cc";
    backButton.style.color = "white";
    backButton.style.cursor = "pointer";
    backButton.style.borderRadius = "5px";

    backButton.onclick = () => window.history.back();

    const article = document.querySelector("article");
    article.insertBefore(backButton, article.firstChild);
});

document.getElementById("dark-mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

window.onload = function () {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
};

// search functionality
document.getElementById("search").addEventListener("keyup", function () {
    let searchText = this.value.toLowerCase();
    let blogPosts = document.querySelectorAll(".blog-post");

    blogPosts.forEach(post => {
        let title = post.querySelector("h3").innerText.toLowerCase();
        post.style.display = title.includes(searchText) ? "block" : "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("fade-in");
});
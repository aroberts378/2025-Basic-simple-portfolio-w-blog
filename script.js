document.addEventListener("DOMContentLoaded", function welcomeMsg(name) {
    return console.log("Welcome to my Portfolio!");
});

let nameValue = "What is your name?";
    console.log(welcomeMsg(nameValue));

const nav = document.querySelector(".nav");
    if (nav !== null) { 
        console.log("The nav bar is displayed.");
    } else {
        console.log("The nav bar is not displayed.");
    }
// const navToggle = document.querySelector(".nav-toggle");
// const navLinks = document.querySelectorAll(".nav-link");
// const sections = document.querySelectorAll("section");
// const navHeight = nav.getBoundingClientRect().height;   // Get the height of the nav bar

// let myButton = document.getElementById("myButton"); 
// let heading = document.getElementById("heading");
// let subheading = document.getElementById("subheading");
// let myProjects = document.getElementById("myProjects");
// let myContact = document.getElementById("myContact"); 
// let myFooter = document.getElementById("myFooter");
// let myProjectsButton = document.getElementById("myProjectsButton"); 
// let myBlogButton = document.getElementById("myBlogButton");
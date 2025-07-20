// ------- Tab Section Handling -------
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// ------- Sidebar Menu for Mobile -------
const sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

// ------- Google Form Submission -------
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwxf9wJeqP_-TYBhH49JJmvOUr9AuFyXhJvW6KpCzutsf2s07UKNBOP7z7ljM8stnXQ9g/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then(() => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(() => (msg.innerHTML = ""), 3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// ------- Typing Text Animation -------
const roles = [
  "Web Developer",
  "Problem Solver",
  "UI/UX Designer",
  "Software Engineer",
];
let i = 0,
  j = 0,
  isDeleting = false;

function typeEffect() {
  const typingElement = document.getElementById("typing");
  if (!typingElement) return;

  if (!isDeleting && j <= roles[i].length) {
    typingElement.innerHTML = roles[i].substring(0, j++);
    setTimeout(typeEffect, 150);
  } else if (isDeleting && j >= 0) {
    typingElement.innerHTML = roles[i].substring(0, j--);
    setTimeout(typeEffect, 80);
  } else if (!isDeleting && j > roles[i].length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && j < 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
    setTimeout(typeEffect, 300);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// ------- Read More / Read Less Toggle -------
const btn = document.getElementById("read-more-btn");
const paragraph = document.getElementById("intro-text");

if (btn && paragraph) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    paragraph.classList.toggle("collapsed");
    btn.innerText = btn.innerText === "Read more" ? "Read less" : "Read more";
  });
}

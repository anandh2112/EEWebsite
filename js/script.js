  // Header Scroll Effect
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.style.height = "60px";
        header.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        header.style.transition = "all 0.3s ease";
    } else {
        header.style.height = "70px";
        header.style.backgroundColor = "#ffffff";
    }
});

// Typewriter Effect with Faster Blinking Cursor
document.addEventListener("DOMContentLoaded", function () {
    const words = ["Hotels", "Utilities", "Offices", "Residencies", "Industries"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typewriterElement = document.getElementById("typewriter");
    let cursorVisible = true;

    function typeEffect() {
        if (!typewriterElement) return;

        let currentWord = words[wordIndex];
        let displayText = currentWord.substring(0, charIndex);

        // Toggle cursor visibility faster (every 300ms)
        displayText += cursorVisible ? "|" : "";

        typewriterElement.textContent = displayText;

        if (!isDeleting && charIndex === currentWord.length) {
            setTimeout(() => {
                isDeleting = true;
                typeEffect();
            }, 1200);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 300);
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }

        charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
    }

    function blinkCursor() {
        cursorVisible = !cursorVisible;
        setTimeout(blinkCursor, 300); // Faster blinking (300ms)
    }

    setTimeout(typeEffect, 500);
    blinkCursor(); // Start cursor blinking
});          

// header-footer visibility
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  header.classList.add("hide-header");
              } else {
                  header.classList.remove("hide-header");
              }
          });
      },
      { threshold: 0.2 } // Adjust this value based on when you want the effect to trigger
  );

  observer.observe(footer);
});

// //Header & Footer loading

// document.addEventListener("DOMContentLoaded", function () {
//     loadComponent("header.html", "#header");
//     loadComponent("footer.html", "#footer");
// });

// function loadComponent(file, element) {
//     fetch(file)
//         .then(response => response.text())
//         .then(data => document.querySelector(element).innerHTML = data)
//         .catch(error => console.error(`Error loading ${file}:`, error));
// }
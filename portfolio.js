// Array of heading texts to be displayed
const headings = [
    "Welcome.",
    "ẹ káàbọ̀.",
    "Barka da zuwa.",
    "Ndewo o.",
    ".مرحباً"
];

let currentHeadingIndex = 0; // Track which heading is being displayed
let charIndex = 0; // Track which character is being typed in the current heading

const typingSpeed = 100; // Speed of typing each character
const erasingSpeed = 50; // Speed of erasing each character
const delayBetweenHeadings = 2000; // Time before moving to the next heading

const headingElement = document.querySelector(".hero-heading");

// Function to type each character
function type() {
    if (charIndex < headings[currentHeadingIndex].length) {
        headingElement.textContent += headings[currentHeadingIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed); // Call type function again for the next character
    } else {
        setTimeout(erase, delayBetweenHeadings); // Start erasing after a delay
    }
}

// Function to erase each character
function erase() {
    if (charIndex > 0) {
        headingElement.textContent = headings[currentHeadingIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed); // Call erase function again for the next character
    } else {
        currentHeadingIndex = (currentHeadingIndex + 1) % headings.length; // Move to the next heading
        setTimeout(type, typingSpeed); // Start typing the next heading
    }
}

// Start the typing effect when the page loads
document.addEventListener("DOMContentLoaded", () => {
    headingElement.style.opacity = 1; // Make the heading visible
    type();
});


document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector("ul");

    hamburger.addEventListener("click", function () {
        console.log("Hamburger clicked!");
        navLinks.classList.toggle("active");
    });
});


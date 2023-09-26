const words = ["Hello", "Bonjour", "स्वागत हे", "Ciao", "Olá", "おい", "Hallå", "Hallo"];

const curr_word = document.querySelector(".word");
let currentIndex = 0;

function greet() {
    if (currentIndex < words.length) {
        curr_word.textContent = "• " + words[currentIndex];
        currentIndex++;
    } else {
        clearInterval(intervalId); // Stop the interval
        curr_word.style.display = "none"; // Hide the element
        const mainContent = document.querySelector(".main-content");
        mainContent.style.display = "block"; // Show the main content
    }
}

const intervalId = setInterval(greet, 250);

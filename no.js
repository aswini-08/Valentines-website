const noBtn = document.getElementById("noButton");
const gif = document.getElementById("starting-gif");
function nextPage() {
    window.location.href = "yes.html";
}

const messages = [
    "Really pookie? You sure? 😢",
    "I mean... comee onnn 🥺",
    "Think again... just once? 🥹",
    "Last chance... 😭",
    "What if i asked really nicelyyy...😚 ",
    "Pretty Please🥰",
    "I'm going to die😭",
    "yepp i am dead",
    "Ok,you're talking to aswini's ghost👻"
];

let index = 0;
let hoverCount = 0; // Track how many times "No" is hovered

noBtn.addEventListener("mouseover", () => {
    // Move button to a random position
    const x = Math.random() * window.innerWidth * 0.8;
    const y = Math.random() * window.innerHeight * 0.8;

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // Change button text
    noBtn.textContent = messages[index];
    index = (index + 1) % messages.length;

    // Increase hover count
    hoverCount++;

    // Change GIF if "No" is hovered over 5 times
    if (hoverCount === 5) {
        gif.style.opacity="0";

        setTimeout(() =>{
            gif.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjduOTFlZ29tZWNod2NqbmwxcTdnbXRibDEwemowcHFscnJ1aGFpdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CDwTM3uvzP5Bb6YtCw/giphy.gif";
            gif.style.opacity="1";
        },700);
        
    }
});

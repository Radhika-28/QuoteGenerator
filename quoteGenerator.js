const quoteContent = document.querySelector("blockquote");
const quoteAuthor = document.querySelector("cite");
const generateButton = document.querySelector(".generate");

const getQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      quoteContent.innerText = data.content;
      quoteAuthor.innerText = data.author;
    })
    .catch((err) => console.log(err));
};

document.addEventListener("DOMContentLoaded", getQuote);
generateButton.addEventListener("click", getQuote);

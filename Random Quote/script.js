const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');


const apiURL = "https://api.quotable.io/random";

// for fetch
async function fetchQuote() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    quoteText.textContent = `"${data.content}"`;
    quoteAuthor.textContent = `— ${data.author}`;
  } catch (error) {
    quoteText.textContent = "Oops! Could not fetch a quote.";
    quoteAuthor.textContent = "";
    console.error(error);
  }
}

// EventListener
newQuoteBtn.addEventListener('click', fetchQuote);

window.onload = fetchQuote;

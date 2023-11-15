const newQuoteButton = document.querySelector('#js-new-quote');

newQuoteButton.addEventListener('click', getQuote);

function getQuote() {
    console.log("Button clicked!"); // Check the button click

    const apiEndpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            displayQuote(data.question);
        })
        .catch(error => {
            console.error("Error fetching quote: ", error);
            alert("An error occurred while fetching the quote.");
        });
}

function displayQuote(quote) {
    const quoteTextElement = document.getElementById('js-quote-text');
    quoteTextElement.textContent = quote;
}

document.addEventListener('DOMContentLoaded', getQuote);

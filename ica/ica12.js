// Select the 'new quote' button and assign it to a variable
const newQuoteButton = document.querySelector('#new-quote-button');

// Write an event listener for the button
newQuoteButton.addEventListener('click', getQuote);

// Declare the getQuote function
function getQuote() {
    // API endpoint
    const apiEndpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

    // Use fetch method to get a random quote
    fetch(apiEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            displayQuote(data);
        })
        .catch(error => {
            console.error('Fetch operation error: ', error);
            alert('Error fetching quote: ' + error.message);
        });
}

// Write the displayQuote function
function displayQuote(quoteData) {
    const quoteTextElement = document.getElementById('js-quote-text');
    quoteTextElement.textContent = quoteData.quote;
}

// Ensure a quote is displayed on page load
document.addEventListener('DOMContentLoaded', getQuote);

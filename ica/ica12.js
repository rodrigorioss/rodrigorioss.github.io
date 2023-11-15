const newQuoteButton = document.querySelector('#js-new-quote');

newQuoteButton.addEventListener('click', getQuote);

const showAnswerButton = document.querySelector('#js-tweet');

showAnswerButton.addEventListener('click', displayAnswer);

function getQuote() {
    console.log("Button clicked!"); // Check the button click

    const apiEndpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            currentTriviaData = data;

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

function displayAnswer() {
    if (currentTriviaData && currentTriviaData.answer) {
        const answerTextElement = document.getElementById('js-answer-text');
        answerTextElement.textContent = `Answer: ${currentTriviaData.answer}`;
    } else {
        console.log("No answer available");
    }
}

let currentTriviaData = null;

document.addEventListener('DOMContentLoaded', getQuote);

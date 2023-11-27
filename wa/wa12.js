document.addEventListener('DOMContentLoaded', getLyric);

document.querySelector('#js-new-quote').addEventListener('click', getLyric);
document.querySelector('#js-tweet').addEventListener('click', tweetLyric);

// Genius API key (normally, this should be secured on a server)
const accessToken = 'Kw44RUYtkk0T4X7JAsRtog9o8ammy16xyH9WC6HM1l4XhVcClwLx2AT52R84vVRg';

function getLyric() {
    // Placeholder for Genius API request
    // Note: This is a simplified example. In a real-world scenario, you'd want to handle pagination, error responses, etc.
    const apiUrl = 'https://api.genius.com/songs/378195'; // Replace with a dynamic endpoint as per your requirement

    fetch(apiUrl, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        // Assuming data.response.song.lyrics holds the lyrics
        displayLyric(data.response.song.lyrics, data.response.song.full_title);
    })
    .catch(error => {
        console.error("Error fetching lyrics: ", error);
        alert("An error occurred while fetching the lyrics.");
    });
}

function displayLyric(lyric, title) {
    document.getElementById('js-lyric-text').textContent = lyric;
    document.getElementById('js-song-artist').textContent = title;
}

function tweetLyric() {
    const lyric = document.getElementById('js-lyric-text').textContent;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(lyric)}`;
    window.open(tweetUrl, '_blank');
}

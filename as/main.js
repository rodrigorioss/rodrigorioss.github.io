const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];


const altTexts = {
  'pic1.jpg': 'Closeup of a blue human eye',
  'pic2.jpg': 'Image description for pic2',
  'pic3.jpg': 'Image description for pic3',
  'pic4.jpg': 'Image description for pic4',
  'pic5.jpg': 'Image description for pic5'
};


imageFilenames.forEach(filename => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + filename);
  newImage.setAttribute('alt', altTexts[filename]);
  thumbBar.appendChild(newImage);
  
  
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
});


btn.addEventListener('click', () => {
  const className = btn.getAttribute('class');
  if (className === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});

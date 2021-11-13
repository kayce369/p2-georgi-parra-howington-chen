// hamburger menu
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');
hamburger.addEventListener('click',()=>{
    navUL.classList.toggle('show');
});

//learn more
const readmoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.card_read-more');
const cardHolder = document.getElementById('cards');

cardHolder.addEventListener('click',e=>{
    const current= e.target;
    const isReadMoreBtn = current.className.includes('read-more-btn');
    if(!isReadMoreBtn)
        return;
    const currentText = e.target.parentNode.querySelector('.card_read-more');
    currentText.classList.toggle('card_read-more--open');
    current.textContent = current.textContent.includes('Read More...')?'Read Less...' :'Read More...'
})

//Popup Box
var popup = document.getElementById('popup-box');
var span = document.getElementById('close');

window.onload = function() {boxLoad()};

function boxLoad() {
  setTimeout(function() {
      popup.style.display = "block";
    }, 
    5000);
};

span.onclick = function() {
    popup.style.display = "none";
  };

window.onclick = function(outside) {
  if (outside.target == popup) {
    popup.style.display = "none";
  }
};

//Tour API
var art = document.getElementById('art');
var tourBtn = document.getElementById('tour');

tourBtn.onclick = function(showArt) {
  showArt.preventDefault()
  var artID = Math.floor(Math.random() * 115540);
  fetch('https://api.artic.edu/api/v1/artworks/' + artID)
  .then(function(response) {
    return response.json()
  })
  .then(function(result) {
    renderArt(result)
  })
}

function renderArt(artInfo) {
  art.innerHTML = ''

  if (artInfo.status === 404) {
    var oops = document.createElement('h2')
    oops.textContent = 'Oops!'
    art.appendChild(oops)

    var retry = document.createElement('p')
    retry.textContent = 'It seems that file has not been digitized. Please try again!'
    art.appendChild(retry)
  }

  var title = document.createElement('h2')
  title.textContent = artInfo.data.title
  art.appendChild(title)

  var artImg = document.createElement('img')
  artImg.src = artInfo.config.iiif_url + '/' + artInfo.data.image_id + '/full/843,/0/default.jpg'
  artImg.alt = artInfo.data.thumbnail.alt_text
  art.appendChild(artImg)

  var artist = document.createElement('p')
  artist.textContent = 'Artist: ' + artInfo.data.artist_title
  art.appendChild(artist)

  var year = document.createElement('p')
  year.textContent = 'Created: ' + artInfo.data.date_display
  art.appendChild(year)

  var origin = document.createElement('p')
  origin.textContent = 'Place of Origin: ' + artInfo.data.place_of_origin
  art.appendChild(origin)

  var medium = document.createElement('p')
  medium.textContent = 'Medium: ' + artInfo.data.medium_display
  art.appendChild(medium)

  var credit = document.createElement('p')
  credit.textContent = 'Art made available by ' + artInfo.data.credit_line
  art.appendChild(credit)
}


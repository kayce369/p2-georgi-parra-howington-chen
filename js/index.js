// hamburger menu
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');
hamburger.addEventListener('click',()=>{
    navUL.classList.toggle('show');
});

// //learn more
// const readmoreBtn = document.querySelector('.read-more-btn');
// const text = document.querySelector('.card_read-more');
// const cardHolder = document.getElementById('cards');

// cardHolder.addEventListener('click',e=>{
//     const current= e.target;
//     const isReadMoreBtn = current.className.includes('read-more-btn');
//     if(!isReadMoreBtn)
//         return;
//     const currentText = e.target.parentNode.querySelector('.card_read-more');
//     currentText.classList.toggle('card_read-more--open');
//     current.textContent = current.textContent.includes('Read More...')?'Read Less...' :'Read More...'
// })

// //Popup Box
// var popup = document.getElementById('popup-box');
// var span = document.getElementById('close');

// window.onload = function() {boxLoad()};

// function boxLoad() {
//   setTimeout(function() {
//       popup.style.display = "block";
//     }, 
//     5000);
// };

// span.onclick = function() {
//     popup.style.display = "none";
//   };

// window.onclick = function(outside) {
//   if (outside.target == popup) {
//     popup.style.display = "none";
//   }
// };

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
    art.textContent = 'Try Again'
  }

  var title = document.createElement('h2')
  title.textContent = artInfo.data.title
  art.appendChild(title)

}


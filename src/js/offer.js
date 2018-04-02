let offerLink = document.getElementById('offerLink');
let offer = document.getElementById('offer');
offerLink.addEventListener('click', popup);
function popup(){
    offer.classList.add('offerActive');
}
const cardset = document.querySelectorAll('.div1');
const cardStorege = JSON.parse(localStorage.getItem('card')) || [];
const spanCounts = document.querySelector('.spanCounts');
spanCounts.textContent = cardStorege.length;

cardset.forEach(el => {
     let id = el.id;
     let img = el.childNodes[1].childNodes[1].attributes.src.textContent;
     let title = el.childNodes[3].innerHTML;
     let price = el.childNodes[7].innerHTML;
     let btadd = el.childNodes[9];
     let pricenumb = parseInt(price.replace(/\g/, ""), 10);

btadd.addEventListener('click', () => {
     let cart = {id, img, title, pricenumb, btadd, quantity: 1};
     const cardStorege = localStorage.getItem('card') || "[]";
     
     let card = JSON.parse(cardStorege);

 const existCard = card.findIndex((item => item.id === id));
     if(existCard !== -1) {
         alert('Такой товар уже добавлен!')
     }else {
        card.push(cart);  
     }    

localStorage.setItem('card', JSON.stringify(card));
location.reload();
})
});

            // Pop-Up


document.addEventListener('DOMContentLoaded', function() {

const imgpopup = document.querySelector('.imgpopup');
const titlepopup = document.querySelector('.titlepopup');
const pricepopup = document.querySelector('.pricepopup');
const bgpopup = document.querySelector('.bgpopup');

cardset.forEach(el => {
    let openCard = el.childNodes[1];
    let img = el.childNodes[1].childNodes[1].attributes.src.textContent;
    let title = el.childNodes[3].innerHTML;
    let price = el.childNodes[7].innerHTML;

openCard.addEventListener('click', () => {
    imgpopup.src = img;
    titlepopup.textContent = title;
    pricepopup.textContent = price;
    bgpopup.classList.add('bgpopupclass');
    document.querySelector('html').classList.add('noscroll');
})

})

document.querySelector('.btClosedpopup').addEventListener('click', () => {
    bgpopup.classList.remove('bgpopupclass');
    document.querySelector('html').classList.remove('noscroll');
});

});




                //    Навагация по сайту


const menu = document.querySelector('.menu');
const product = document.querySelector('.product');
const home = document.querySelector('.home');
const homesection = document.querySelector('.home-section');

home.addEventListener('click', () => {
    homesection.scrollIntoView({
        behavior: `smooth`,
        block: `start`
    })
});

product.addEventListener('click', () => {
    document.querySelector('.product-section').scrollIntoView({
        behavior: `smooth`,
        block: `start`
    })
});

menu.addEventListener('click', () => {
   document.querySelector('.menu-section').scrollIntoView({
    behavior: `smooth`,
    block: `start`
   })
});

const reservation = document.querySelector('.reservation');

reservation.addEventListener('click', () => {
    document.querySelector('.reservation-section').scrollIntoView({
        behavior: `smooth`,
        block: `start`
    })
});

                //  Go-up

const btgoup = document.querySelector('.btgoup');
btgoup.addEventListener('click', goTop);
window.addEventListener('scroll', trackcoord);

function trackcoord() {
    let coord = window.pageYOffset;
    let offset = document.documentElement.clientHeight;
    if(coord > offset) {
        btgoup.classList.add('btgoupclass');
    }
    else {
        btgoup.classList.remove('btgoupclass'); 
    }
};

function goTop() {
    if(window.pageYOffset > 0) {
        window.scrollBy(0, -77)
        setTimeout(goTop, 0)
    }
};


                // Carusel

const arrowLeft = document.querySelector('.arrowLeft');
const arrowRigth = document.querySelector('.arrowRigth');
const carusel = document.querySelector('.carusel');
let offset = 0;

arrowRigth.addEventListener('click', () => {
    
    offset = offset += 605;
    if(offset > 1210) {
       offset = 0
    }
    carusel.style.left = -offset + `px`;

});

arrowLeft.addEventListener('click', () => {
    
    offset = offset -= 605;
    if(offset < 0) {
      offset = 1210
    }
    carusel.style.left = -offset + `px`;

});


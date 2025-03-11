const storege = JSON.parse(localStorage.getItem('card') || []);
const cart = document.querySelector('.cart');
const spanTotal = document.querySelector('.spanTotal');
const spanCounts = document.querySelector('.spanCounts');
spanCounts.textContent = storege.length;


if(storege.length > 0) {
   document.querySelector('.h1youcart').innerHTML = `Your cart`;
   document.querySelector('.totals').style.display = `flex`;
}

if(storege.length <= 0) {
   document.querySelector('.cartImgempty').style.display = `block`;
}

function quantityPrice() {
let totalPrice = storege.reduce((prev, item) => {

   return prev + item.pricenumb * item.quantity;

},0)
   spanTotal.innerHTML = `${totalPrice} $`;
}

function renderCards() {
      cart.innerHTML = ``;
      if(storege) {
         storege.forEach((el, index) => {
            let {id, img, title, pricenumb, btadd, quantity = 1} = el;
            let newCard = document.createElement('div');
            newCard.setAttribute('class', 'newcart');
            newCard.innerHTML = `
            <div class="newcart" id="${id}">
            <div class="cartZoom">
                <img  class="cartImg" src="${img}" alt="">
            </div>
            <p class="cartTitle">${title}</p>
            <p class="cartPrice">${pricenumb * quantity}$</p>
            <div class="counts">
            <span class="spanMinus" data-index="${index}">-</span>
            <input class="inputcount" type="text" value="${quantity}" readonly>
            <span class="spanPlus" data-index="${index}">+</span>
            </div>
            <button  data-index="${index}" class="btclosed">X</button>
            </div>        
            `
         cart.append(newCard);

        });
      }
   quantityPrice();
}

cart.addEventListener('click', event => {
   const index = event.target.dataset.index;

   if(event.target.classList.contains('spanPlus')) {
      storege[index].quantity = (storege[index].quantity) + 1;
   }
   else if (event.target.classList.contains('spanMinus')) {
      storege[index].quantity -= 1;
      if(storege[index].quantity <= 0) {
         storege.splice(index, 1)
         location.reload();
      }
   }

localStorage.setItem('card', JSON.stringify(storege));
      renderCards();
});

renderCards();


            // Удаление товаров с корзины

document.onclick = (event) => {
   const cartPosition = event.target.getAttribute('data-index');
   if(event.target.classList.contains('btclosed') && cartPosition !== null) {
      storege.splice(cartPosition, 1);
      localStorage.setItem('card', JSON.stringify(storege));
      renderCards();
      location.reload();
   }
};


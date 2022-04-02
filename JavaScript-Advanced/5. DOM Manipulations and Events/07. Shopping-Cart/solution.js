function solve() {
      const shopingCart = document.querySelector('.shopping-cart');
      const checkBtn = document.querySelector('.checkout');
      let textArea = document.querySelector('textarea');
      let cart = []

      shopingCart.addEventListener('click', (ev) => {
         if(ev.target.tagName == 'BUTTON' && ev.target.className == 'add-product') {
            const product = ev.target.parentNode.parentNode;
            const title = product.querySelector('.product-title').textContent;
            const price = Number(product.querySelector('.product-line-price').textContent);
            textArea.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`
            cart.push({title,price})
         }
      })
   
      
      checkBtn.addEventListener('click', () => {

         let result = cart.reduce((acc, c) => {
            acc.prod.add(c.title);
            acc.total += c.price;
            return acc;
         }, {prod: new Set, total: 0});

         textArea.value += `You bought ${Array.from(result.prod).join(', ')} for ${result.total.toFixed(2)}.`;

         const addButtons = Array.from(document.querySelectorAll('.add-product')).map(button => {
            button.disabled = true;
         })

         checkBtn.disabled = true;

      })

}

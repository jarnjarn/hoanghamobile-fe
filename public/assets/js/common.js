function getCookie(key) {
	const decodedCookie = decodeURIComponent(document.cookie);
	const cookieArray = decodedCookie.split(';');
	for (let i = 0; i < cookieArray.length; i++) {
	  let cookie = cookieArray[i];
	  while (cookie.charAt(0) === ' ') {
		cookie = cookie.substring(1);
	  }
	  if (cookie.indexOf(key + '=') === 0) {
		return decodeURIComponent(cookie.substring(key.length + 1));
	  }
	}
	return null;
}

// set cookie
function setCookie(key, value) {
	const encodedKey = encodeURIComponent(key);
	const encodedValue = encodeURIComponent(value);
	const cookieString = encodedKey + '=' + encodedValue + ';path=/';
	document.cookie = cookieString;
  }
// delete cookie


const Cart = {
	setCount: function (count){
		$("#cart-total").text(count);
	},
	getCount:function(){
		var list = Cart.getCart();
		var count = 0;
		list.forEach(function (item) {
			count += item.Quantity;
		});
		return count;
	},
	getCart: function () {
		const list = getCookie('Cart');
		if (list) {
			return JSON.parse(list);
		}
		return [];
	},
	setCart: function (cart) {
		setCookie('Cart', JSON.stringify(cart));
	},
	init
	: function () {
		this.setCount(this.getCount());
	},
	Add: function (id,option,color,price) {
		const cart = Cart.getCart();
		var index = cart.findIndex(x => x.id == id && x.Option == option && x.Color == color);
		if (index === -1) {
			cart.push({ id: id, Option: option, Color: color, Price:price, Quantity: 1 });
		} else {
			cart[index].Quantity += 1;
		}
		this.setCart(cart);
		this.setCount(this.getCount);
	},
}
$(document).ready(function () {
	Cart.init();
	// eslint-disable-next-line no-undef
	$('#dien-thoai-di-dong').addClass('actived');
	$('.lrs-slider').owlCarousel({
		 nav: true,
		 itemClass: 'lr-item',
		 loop: false,
		 items:8,
		 autoplay: true,
		 autoplayHoverPause: true,
		 responsiveClass: true,
		 margin: 10
	 });


});

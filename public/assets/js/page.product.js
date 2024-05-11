let Product = null;
const imagePreview_init = function() {
	var config = {
		$AutoPlay: !0,
		$SlideDuration: 500,
		$Idle: 5e3,
		$ArrowNavigatorOptions: { $Class: $JssorArrowNavigator$ },
		$PauseOnHover: 1,
		$ThumbnailNavigatorOptions: {
		  $Class: $JssorThumbnailNavigator$,
		  $SpacingX: 10,
		  $SpacingY: 5,
		  $ArrowNavigatorOptions: { $Class: $JssorArrowNavigator$ },
		},
	}
	var jssor_1_slider = new $JssorSlider$('imagePreview', config)
	$("#versionOption").click(function () {
		$(this).find("a").click();
	  });
	  $(".slider-t-l").click(function () {
		jssor_1_slider.$Prev();
	  });
	  $(".slider-t-r").click(function () {
		jssor_1_slider.$Next();
	  });
}

const versionOption_init = function() {
	function toPrice(num){

		if(getDataProduct('Discount'))
		{
			num = num - getDataProduct('Discount')
		}
		return new Number(num).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace('VND ','₫')
	}


	const toColor = (e,i)=>{
		return `
		<div class="item ${i==0?'selected':''}">
			<span>
				<label>
					<strong class="name">${e.Name}</strong>
				</label>
			</span>
			<strong class="price">${toPrice(e.Price)}</strong>
		</div>

		`
	}



	$("#versionOption .item").each(function () {
		$(this).click(function () {
			$("#versionOption .item.selected").removeClass("selected");
			$(this).addClass("selected");

			var json =  JSON.parse($(this).attr("data-json"));
			var html = json.Colors.map(toColor).join("");
			$("#colorOptions").html(html);
			colorOptions_init();
		});
	});
}

const colorOptions_init = function() {
	$("#colorOptions .item").each(function () {
		$(this).click(function () {
			$("#colorOptions .item.selected").removeClass("selected");
			$(this).addClass("selected");
			var color = $(this).find("span label strong").text();
			var price = $(this).find(".price").text();
			price = price.match(/\d+/g).join('');
			if(getDataProduct('Discount')){
				price = price - Number(getDataProduct('Discount'))
			}
			$(`img[data-name='${color}']`).click();
			showPrice(price);
		});
	});
}

const showPrice = function(price) {
	price = new Number(price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace('VND ','₫')
	$("p.price.current-product-price > strong").text(price);
}


const showMore = function() {
	var curr = $("#productContent").attr("data-height");

	if(curr == 716){
		$("#productContent").css("height","auto");
		$("#productContent").attr("data-height",$("#productContent").height());
		$("#viewMoreContent").text("Thu gọn");

	}
	else{
		$("#productContent").css("height",716);
		$("#productContent").attr("data-height",716);
		$("#viewMoreContent").text("Xem thêm");
	}
}


const addToCart = function() {
	var versionSelected = $("#versionOption .item.selected .name").text();
	var colorSelected = $("#colorOptions .item.selected .name").text();
	var priceSelected = $(".price.current-product-price strong").text().match(/\d+/g).join('');
	var id = $("input[name='_id']").val();
	Cart.Add(id,versionSelected,colorSelected,priceSelected)
}
$().on("load",function(){

})

function getDataProduct(key) {
	let Product = JSON.parse($('input[name="Product"]').val())
	return Product[key];
}

$(document).ready(function () {
	Product = JSON.parse($('input[name="Product"]').val())
	$('#dien-thoai-di-dong, #dien-thoai-di-dongiphone, #dien-thoai-di-dongiphoneiphone-14-series').addClass('actived');
			imagePreview_init();
			versionOption_init();
			colorOptions_init();
	$(".addToCart").click(addToCart);

})

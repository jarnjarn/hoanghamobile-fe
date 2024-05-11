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

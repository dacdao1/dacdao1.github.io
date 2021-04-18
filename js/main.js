! function (o) {
	"use strict";
	var e;
	o(".video-btn").click(function () {
		e = o(this).data("src")
	}), console.log(e), o("#myModal").on("shown.bs.modal", function (i) {
		o("#video").attr("src", e + "?modestbranding=1&rel=0&iv_load_policy=3&fs=0&disablekb=1&showinfo=0&autoplay=1&controls=0")
	}), o("#myModal").on("hide.bs.modal", function (i) {
		o("#video").attr("src", e)
	}), o(document).ready(function () {
		o("#scheduleDemo").click(function () {
			o("html, body").animate({
				scrollTop: o("html, body").get(0).scrollHeight
			}, 5e3)
		})
	}), o(window).on("scroll", function () {
		o(window).scrollTop() > 200 ? o(".scrolling-navbar").addClass("top-nav-collapse") : o(".scrolling-navbar").removeClass("top-nav-collapse")
	}), (new WOW).init(), o(".main-navigation").onePageNav({
		currentClass: "active"
	}), o(window).on("load", function () {
		o("body").scrollspy({
			target: ".navbar-collapse",
			offset: 195
		}), o(window).on("scroll", function () {
			o(window).scrollTop() > 200 ? o(".fixed-top").addClass("menu-bg") : o(".fixed-top").removeClass("menu-bg")
		})
	}), o(".mobile-menu").slicknav({
		prependTo: ".navbar-header",
		closeOnClick: !0,
		parentTag: "span",
		allowParentLinks: !0,
		duplicate: !1,
		label: ""
	}), o(".counter").counterUp({
		time: 1e3
	}), o("#portfolio").mixItUp(), o(".touch-slider").owlCarousel({
		navigation: !1,
		pagination: !0,
		slideSpeed: 1e3,
		stopOnHover: !0,
		autoPlay: !0,
		items: 2,
		itemsDesktop: [1199, 2],
		itemsDesktopSmall: [1024, 2],
		itemsTablet: [600, 1],
		itemsMobile: [479, 1]
	}), o(".touch-slider").find(".owl-prev").html('<i class="fa fa-chevron-left"></i>'), o(".touch-slider").find(".owl-next").html('<i class="fa fa-chevron-right"></i>'), o(window).on("scroll", function () {
		o(window).scrollTop() > 200 ? o(".header-top-area").addClass("menu-bg") : o(".header-top-area").removeClass("menu-bg")
	}), o(".video-popup").magnificPopup({
		disableOn: 700,
		type: "iframe",
		mainClass: "mfp-fade",
		removalDelay: 160,
		preloader: !1,
		fixedContentPos: !1
	});
	o("a.scrollto").on("bind", "click.smoothscroll", function (e) {
		e.preventDefault();
		var i = this.hash;
		o("html, body").stop().animate({
			scrollTop: o(i).offset().top
		}, 1200, "easeInOutExpo", function () {
			window.location.hash = i
		})
	});
	o(window).scroll(function () {
		o(this).scrollTop() > 200 ? o(".back-to-top").fadeIn(400) : o(".back-to-top").fadeOut(400)
	}), o(".back-to-top").on("click", function (e) {
		return e.preventDefault(), o("html, body").animate({
			scrollTop: 0
		}, 600), !1
	}), o(".lightbox").nivoLightbox({
		effect: "fadeScale",
		keyboardNav: !0
	}), o.stellar({
		horizontalScrolling: !0,
		verticalOffset: 40,
		responsive: !0
	}), o("#loader").fadeOut(), o(document).ready(function () {
		o("#uiSlider").carousel("pause"), o("#uiSlider").on("slide.bs.carousel", function () {
			o("#uiSlider video").each(function () {
				this.pause(), this.currentTime = 0
			})
		}), o("#uiSlider").on("slid.bs.carousel", function () {
			o("#uiSlider .active").find("video").length > 0 ? o("#uiSlider .active").find("video")[0].play() : setTimeout(function () {
				o("#uiSlider").carousel("next")
			}, 5e3)
		})
	}), o(function () {
		o("a[href*=#]").on("click", function (e) {
			e.preventDefault(), o("html, body").animate({
				scrollTop: o(o(this).attr("href")).offset().top
			}, 500, "linear")
		})
	})
}(jQuery);

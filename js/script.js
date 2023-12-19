		window.onscroll = function() {
			scrollFunction()
		}
		
		function scrollFunction() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				document.getElementById("scroll-up").classList.add("show");
			} else {
				document.getElementById("scroll-up").classList.remove("show");
			}
		}
		
		function scrollToTop() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}

		function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

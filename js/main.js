jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 70
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  $(function(){
	　$(window).scroll(function (){
		$('.effect-fade').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight){
				$(this).addClass('effect-scroll');
			}
		});
	　});
	});

  		// HTML Chart
		if($('#html').length) {

			var doughnutData = [{
	        value: 70,
	        color: "#F9CD44"
	      },
	      {
	        value: 30,
	        color: "#3c3c3c"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);
		};

		// CSS Chart
		if($('#css').length) {

			var doughnutData = [{
	        value: 70,
	        color: "#F9CD44"
	      },
	      {
	        value: 30,
	        color: "#3c3c3c"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("css").getContext("2d")).Doughnut(doughnutData);
		};


  		// Javascript Chart
		if($('#javascript').length) {

			var doughnutData = [{
	        value: 90,
	        color: "#F9CD44"
	      },
	      {
	        value: 10,
	        color: "#3c3c3c"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);
		};

		// jQuery Chart
		if($('#jquery').length) {

			var doughnutData = [{
	        value: 70,
	        color: "#F9CD44"
	      },
	      {
	        value: 30,
	        color: "#3c3c3c"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("jquery").getContext("2d")).Doughnut(doughnutData);
		};

		// Python Chart
		if($('#python').length) {

			var doughnutData = [{
	        value: 90,
	        color: "#F9CD44"
	      },
	      {
	        value: 10,
	        color: "#3c3c3c"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("python").getContext("2d")).Doughnut(doughnutData);
		};

		// Django Chart
		if($('#django').length) {

			var doughnutData = [{
	        value: 90,
	        color: "#F9CD44"
	      },
	      {
	        value: 10,
	        color: "#3c3c3c"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("django").getContext("2d")).Doughnut(doughnutData);
		};

		// MySQL Chart
		if($('#mysql').length) {

			var doughnutData = [{
	        value: 90,
	        color: "#F9CD44"
	      },
	      {
	        value: 10,
	        color: "#3c3c3c"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("mysql").getContext("2d")).Doughnut(doughnutData);
		};

		// AWS Chart
		if($('#aws').length) {

			var doughnutData = [{
	        value: 90,
	        color: "#F9CD44"
	      },
	      {
	        value: 10,
	        color: "#3c3c3c"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("aws").getContext("2d")).Doughnut(doughnutData);
		};

		// Linux Chart
		if($('#linux').length) {

			var doughnutData = [{
	        value: 90,
	        color: "#F9CD44"
	      },
	      {
	        value: 10,
	        color: "#3c3c3c"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("linux").getContext("2d")).Doughnut(doughnutData);
		};

		// Git Chart
		if($('#git').length) {

			var doughnutData = [{
	        value: 90,
	        color: "#F9CD44"
	      },
	      {
	        value: 10,
	        color: "#3c3c3c"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("git").getContext("2d")).Doughnut(doughnutData);
		};

		// Docker Chart
		if($('#docker').length) {

			var doughnutData = [{
	        value: 60,
	        color: "#F9CD44"
	      },
	      {
	        value: 40,
	        color: "#3c3c3c"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("docker").getContext("2d")).Doughnut(doughnutData);
		};

		// Kubernates Chart
		if($('#kubernetes').length) {

			var doughnutData = [{
	        value: 60,
	        color: "#F9CD44"
	      },
	      {
	        value: 40,
	        color: "#3c3c3c"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("kubernetes").getContext("2d")).Doughnut(doughnutData);
		};


});

	
$(document).ready(function(){

	$("#cuerpoPestana>div").hide();
	$(".inicioB").addClass("active");

	$("#inicio").show();

	$(".inicioB").click(function(){

		$(".nav li").removeClass("active");
		$(".inicioB").addClass("active");

		$("#cuerpoPestana>div").hide();
		$("#inicio").fadeIn("slow");
	
	});

	$("#contactosB").click(function(){


		$(".nav li").removeClass("active");
		$("#contactosB").addClass("active");

		$("#cuerpoPestana>div").hide();
		$("#contactos").fadeIn("slow");

	});

	$("#quienesB").click(function(){

		$(".nav li").removeClass("active");
		$("#quienesB").addClass("active");

		$("#cuerpoPestana>div").hide();
		$("#quienes").fadeIn("slow");

	});

	$("#ofertasB").click(function(){

		$(".nav li").removeClass("active");
		$("#ofertasB").addClass("active");

		$("#cuerpoPestana>div").hide();
		$("#ofertas").fadeIn("slow");
	});

	$("#serviciosB").click(function(){

		$(".nav li").removeClass("active");
		$("#serviciosB").addClass("active");

		$("#cuerpoPestana>div").hide();
		$("#servicios").fadeIn("slow");
	});

	//--- SLIDESHOW ---

	$("#hoverSlider").hover( function() {

		$("#hoverSlider").stop();
		$("#cuerpo").stop();
		$("#encabezado").stop();

		$("#encabezado").css("z-index", "1");

		$("#hoverSlider").animate({height: "500px"}, 400);
		$("#cuerpo").animate({marginTop:"5px"}, 400);
		$("#encabezado").animate({marginTop:"-1em"}, 600, function(){

			$("#sliderShow").css("z-index", "0");
		});

	}, function() {

		$("#hoverSlider").stop();
		$("#cuerpo").stop();
		$("#encabezado").stop();

		$("#sliderShow").css("z-index", "-1");

		$("#hoverSlider").animate({height: "200px"}, 600);
		$("#cuerpo").animate({marginTop:"0px"}, 400);
		$("#encabezado").animate({marginTop:"1em"}, 600);
	});

	$("#sliderShow").hover( function() {

		$("#hoverSlider").stop();
		$("#cuerpo").stop();
		$("#encabezado").stop();

		$("#sliderShow").css("z-index", "0");

		$("#hoverSlider").animate({height: "500px"}, 400);
		$("#cuerpo").animate({marginTop:"5px"}, 400);
		$("#encabezado").animate({marginTop:"-1em"}, 600);

	}, function() {

		$("#hoverSlider").stop();
		$("#cuerpo").stop();
		$("#encabezado").stop();

		$("#sliderShow").css("z-index", "-1");

		$("#hoverSlider").animate({height: "200px"}, 600);
		$("#cuerpo").animate({marginTop:"0px"}, 400);
		$("#encabezado").animate({marginTop:"1em"}, 600);
	});

});

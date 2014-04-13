	
$(document).ready(function(){

	$(window).on("resize", methodToFixLayout);

	$(".inicioB").addClass("active");
	$("#contactosB").removeClass("active");
	$("#quienesB").removeClass("active");

	$("#encabezado").hide();
	$("#cuerpo").hide();
	$("#pieDePagina").hide();

	$("#inicio").hide();
	$("#contactos").hide();
	$("#quienes").hide();
	$("#ofertas").hide();
	$("#servicios").hide();

	$("#encabezado").fadeIn(200, function(){
		
		$("#cuerpo").fadeIn(300, function(){

			$("#inicio").fadeIn(150, function(){

				$("#pieDePagina").fadeIn("slow");
	
			});
	
		});

	});

	$(".inicioB").click(function(){

		$(".inicioB").addClass("active");
		$("#contactosB").removeClass("active");
		$("#quienesB").removeClass("active");
		$("#ofertasB").removeClass("active");
		$("#serviciosB").removeClass("active");

		//$("#dentroTabla").css("border-top-left-radius" , "0px");

		$("#inicio").fadeIn("slow");
		$("#contactos").hide();
		$("#quienes").hide();
		$("#ofertas").hide();
		$("#servicios").hide();		
	});

	$("#contactosB").click(function(){


		$(".inicioB").removeClass("active");
		$("#contactosB").addClass("active");
		$("#quienesB").removeClass("active");
		$("#ofertasB").removeClass("active");
		$("#serviciosB").removeClass("active");

		$("#inicio").hide();
		$("#contactos").fadeIn("slow");
		$("#quienes").hide();
		$("#ofertas").hide();
		$("#servicios").hide();
	});

	$("#quienesB").click(function(){

		$(".inicioB").removeClass("active");
		$("#contactosB").removeClass("active");
		$("#quienesB").addClass("active");
		$("#ofertasB").removeClass("active");
		$("#serviciosB").removeClass("active");

		$("#inicio").hide();
		$("#contactos").hide();
		$("#quienes").fadeIn("slow");
		$("#ofertas").hide();
		$("#servicios").hide();
	});

	$("#ofertasB").click(function(){

		$(".inicioB").removeClass("active");
		$("#contactosB").removeClass("active");
		$("#quienesB").removeClass("active");
		$("#ofertasB").addClass("active");
		$("#serviciosB").removeClass("active");

		$("#inicio").hide();
		$("#contactos").hide();
		$("#quienes").hide();
		$("#ofertas").fadeIn("slow");
		$("#servicios").hide();
	});

	$("#serviciosB").click(function(){

		$(".inicioB").removeClass("active");
		$("#contactosB").removeClass("active");
		$("#quienesB").removeClass("active");
		$("#ofertasB").removeClass("active");
		$("#serviciosB").addClass("active");

		$("#inicio").hide();
		$("#contactos").hide();
		$("#quienes").hide();
		$("#ofertas").hide();
		$("#servicios").fadeIn("slow");
	});

	$("#hoverSlider").hover( function() {

		$("#hoverSlider").stop();
		$("#cuerpo").stop();
		$("#encabezado").stop();

		$("#hoverSlider").animate({height: "500px"}, 600);
		$("#cuerpo").animate({marginTop:"5px"}, 400);
		$("#encabezado").animate({marginTop:"-1em"}, 600, function(){

			$("#sliderShow").css("z-index", "0");
			$("#encabezado").css("z-index", "1");
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
		$("#encabezado").css("z-index", "1");

		$("#hoverSlider").animate({height: "500px"}, 600);
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

function methodToFixLayout(){

	var winHeight = $(window).height();
    var winWidth = $(window).width();

    if(winWidth < 640){

    	
    }
}

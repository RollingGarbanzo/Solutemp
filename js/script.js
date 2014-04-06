	
$(document).ready(function(){

	$(window).on("resize", methodToFixLayout);

	$("#inicioB").addClass("active");
	$("#contactosB").removeClass("active");
	$("#quienesB").removeClass("active");

	$("#inicio").hide();
	$("#inicio").fadeIn("slow");
	$("#contactos").hide();
	$("#quienes").hide();
	$("#ofertas").hide();
	$("#servicios").hide();

	$("#inicioB").click(function(){

		$("#inicioB").addClass("active");
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


		$("#inicioB").removeClass("active");
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

		$("#inicioB").removeClass("active");
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

		$("#inicioB").removeClass("active");
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

		$("#inicioB").removeClass("active");
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


}); 

function methodToFixLayout(){

	var winHeight = $(window).height();
    var winWidth = $(window).width();

    if(winWidth < 640){

    	
    }
}
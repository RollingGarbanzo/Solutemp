$(document).ready(function(){

	$(".oferta a").click(function(){

		$("#pestanas button").removeClass("active");
		$("#ofertasA").addClass("active");

		$("#menuServicios .breadcrums").html("Servicios");

		$("#menuServicios button").removeClass("active");
		$("#menuServicios").slideDown();

		var href = $(this).attr("of");


		switch(href){

			case "1": $("#contenidoOferta").html("<h1>50</h1>"); ; break;

			case "2": $("#contenidoOferta").html("<h1>DOS</h1>"); ; break;

			case "3": $("#contenidoOferta").html("<h1>TRES</h1>"); ; break;

			case "4": $("#contenidoOferta").html("<h1>CUATRO</h1>"); ; break;

			case "5": $("#contenidoOferta").html("<h1>CUATRO</h1>"); ; break;

			case "6": $("#contenidoOferta").html("<h1>CUATRO</h1>"); ; break;

			case "7": $("#contenidoOferta").html("<h1>CUATRO</h1>"); ; break;

			case "8": $("#contenidoOferta").html("<h1>CUATRO</h1>"); ; break;

			case "9": $("#contenidoOferta").html("<h1>CUATRO</h1>"); ; break;

			case "10": $("#contenidoOferta").html("<h1>CUATRO</h1>"); ; break;
		}


		$("#cuerpoPestana>.partePestana:not(#contenidoOferta)").hide();
		$("#contenidoOferta").fadeIn();

	});



});

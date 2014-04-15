
$(document).ready(function(){

	$("#pestanasTercero").hide();

	$(".partePestana").hide();
	$(".partePestana").fadeIn("slow");

	$(".inicioA").click(function(){

		var tieneClaseI = $(this).hasClass("active");

		var href = $(this).attr("href");

		$("#pestanasTercero").slideUp(200, function(){

			if(!tieneClaseI){

				window.location.href = href;
				$(".inicioA").addClass("active");

			}

			$(".menuTerciario").hide();
		});
		
	});

	$("#ofertasA").click(function(){

		var esId = $(this).hasClass("active");

		var href = $(this).attr("href");

		$("#pestanasTercero").slideUp(200, function(){

			if(!esId){

				window.location.href = href;
				$("#ofertasA").addClass("active");

			}

			$(".menuTerciario").hide();
		});
	});

	$("#serviciosA").click(function(){

		var esId = $(this).hasClass("active");

		var href = $(this).attr("href");

		$("#pestanasTercero").slideUp(200, function(){

			if(!esId){

				window.location.href = href;
				$("#serviciosA").addClass("active");

			}

			$(".menuTerciario").hide();
		});
	});

	$("#contactosA").click(function(){

		var esId = $(this).hasClass("active");

		var href = $(this).attr("href");

		$("#pestanasTercero").slideUp(200, function(){

			if(!esId){

				window.location.href = href;
				$("#contactosA").addClass("active");

			}

			$(".menuTerciario").hide();
		});
	});

	$("#quienesA").click(function(){

		var esId = $(this).hasClass("active");

		var href = $(this).attr("href");

		$("#pestanasTercero").slideUp(200, function(){

			if(!esId){

				window.location.href = href;
				$("#quienesA").addClass("active");

			}

			$(".menuTerciario").hide();
		});
	});

	//-------------------
	//- MENU SECUNDARIO -
	//-------------------


	$("#aireB").click(function(){

		$("#pestanasTercero").finish();

		if($("#ofertasA").hasClass("active")){

			$("#cuerpoPestana>.partePestana:not(#inicio)");
			window.location.href = "";
		}
		else{
		
			$("#menuServicios button").removeClass("active");
			$("#aireB").addClass("active");

			$("#pestanasTercero").slideUp(200, function(){

				$(".menuTerciario").hide();
				$("#aireC").show();
				$("#pestanasTercero").slideDown(200);
			});
		}
	});

	$("#calefaccionB").click(function(){

		$("#pestanasTercero").finish();

		if($("#ofertasA").hasClass("active")){

			$("#cuerpoPestana>.partePestana:not(#inicio)");
			window.location.href = "";
		}
		else{

			$("#menuServicios button").removeClass("active");
			$("#calefaccionB").addClass("active");

			$("#pestanasTercero").slideUp(200, function(){

				$(".menuTerciario").hide();
				$("#calefaccionC").show();
				$("#pestanasTercero").slideDown(200);
			});
		}

	});

	$("#gasB").click(function(){

		$("#pestanasTercero").finish();

		if($("#ofertasA").hasClass("active")){

			$("#cuerpoPestana>.partePestana:not(#inicio)");
			window.location.href = "";
		}
		else{

			$("#menuServicios button").removeClass("active");
			$("#gasB").addClass("active");

			$("#pestanasTercero").slideUp(200, function(){

				$(".menuTerciario").hide();
				$("#gasC").show();
				$("#pestanasTercero").slideDown(200);
			});
		}

	});

	//--------------------
	//- MENUS TERCIARIOS -
	//--------------------

	$("#ofertasAireC").click(function(){

		var tieneClaseI = $(this).hasClass("ofertasAireC");

		if(tieneClaseI)
			window.location.href = "";

	});

	$("#montajeAireC").click(function(){

		var tieneClaseI = $(this).hasClass("montajeAireC");

		if(tieneClaseI)
			window.location.href = "";


	});

	$("#conductosAireC").click(function(){

		var tieneClaseI = $(this).hasClass("conductosAireC");

		if(tieneClaseI)
			window.location.href = "";
	});

	$("#instalacionAireC").click(function(){

		var tieneClaseI = $(this).hasClass("instalacionAireC");

		if(tieneClaseI)
			window.location.href = "";

	});

	$("#mantenimientoAireC").click(function(){

		var tieneClaseI = $(this).hasClass("mantenimientoAireC");

		if(tieneClaseI)
			window.location.href = "";

	});


	$("#ofertasCalefaccionC").click(function(){

		var tieneClaseI = $(this).hasClass("ofertasCalefaccionC");

		if(tieneClaseI)
			window.location.href = "";

	});


	$("#mantenimientoCalefaccionC").click(function(){

		var tieneClaseI = $(this).hasClass("mantenimientoCalefaccionC");

		if(tieneClaseI)
			window.location.href = "";

	});


	$("#ofertasGasC").click(function(){

		var tieneClaseI = $(this).hasClass("ofertasGasC");

		if(tieneClaseI)
			window.location.href = "";

	});

	$("#montajeGasC").click(function(){

		var tieneClaseI = $(this).hasClass("montajeGasC");

		if(tieneClaseI)
			window.location.href = "";

	});

	$("#mantenimientoGasC").click(function(){

		var tieneClaseI = $(this).hasClass("mantenimientoGasC");

		if(tieneClaseI)
			window.location.href = "";

	});

});







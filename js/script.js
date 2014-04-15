
$(document).ready(function(){

	$("#cuerpoPestana>div").hide();
	reiniciarNavParts();

	$(".inicioA").addClass("active");

	$("#inicio").show();

	$(".inicioA").click(function(){

		reiniciarNavParts();

		$("#pestanas button").removeClass("active");
		$(".inicioA").addClass("active");

		$("#cuerpoPestana>.partePestana:not(#inicio)").hide();
		$("#inicio").fadeIn();

		$("#menuServicios .breadcrums").html("Servicios");

		$("#menuServicios button").removeClass("active");
		$("#menuServicios").slideDown();
	
	});


	$("#ofertasA").click(function(){

		//$(".nav li").removeClass("active");
		reiniciarNavParts();

		$("#pestanas button").removeClass("active");
		$("#ofertasA").addClass("active");

		$("#cuerpoPestana>.partePestana:not(#ofertas)").hide();
		$("#ofertas").fadeIn();

		$("#menuServicios .breadcrums").html("Ofertas");

		$("#menuServicios button").removeClass("active");
		$("#menuServicios").slideDown();
	});

	$("#serviciosA").click(function(){

		//$(".nav li").removeClass("active");
		reiniciarNavParts();

		$("#pestanas button").removeClass("active");
		$("#serviciosA").addClass("active");

		$("#cuerpoPestana>.partePestana:not(#servicios)").hide();
		$("#servicios").fadeIn();

		$("#menuServicios .breadcrums").html("Servicios");

		$("#menuServicios button").removeClass("active");
		$("#menuServicios").slideDown();
	});

	$("#contactosA").click(function(){

		//$(".nav li").removeClass("active");
		reiniciarNavParts();

		$("#pestanas button").removeClass("active");
		$("#contactosA").addClass("active");

		$("#cuerpoPestana>.partePestana:not(#contactos)").hide();
		$("#contactos").fadeIn();

		$("#menuServicios button").removeClass("active");
		$("#menuServicios").slideUp();
	});

	$("#quienesA").click(function(){

		//$(".nav li").removeClass("active");
		reiniciarNavParts();

		$("#pestanas button").removeClass("active");
		$("#quienesA").addClass("active");

		$("#cuerpoPestana>.partePestana:not(#quienes)").hide();
		$("#quienes").fadeIn();

		$("#menuServicios button").removeClass("active");
		$("#menuServicios").slideUp();
	});

	//-------------------
	//- MENU SECUNDARIO -
	//-------------------


	$("#aireB").click(function(){

		//$("#menuServicios .nav li").removeClass("active");
		$("#pestanasTercero").finish();

		if($("#ofertasA").hasClass("active")){

			$(".menuTerciario").slideUp();

			$("#menuServicios button").removeClass("active");
			$("#aireB").addClass("active");

			$("#cuerpoPestana>.partePestana:not(#ofertasAire)").hide();
			$("#ofertasAire").fadeIn();
		}
		else{
		
			$("#menuServicios button").removeClass("active");
			$("#aireB").addClass("active");

			//$("#calefaccionC.menuTerciario, #gasC.menuTerciario").hide(200);
			$("#pestanasTercero").slideUp(200, function(){

				$(".menuTerciario").hide();
				$("#aireC").show();
				$("#pestanasTercero").slideDown(200);
			});
			//$("#pestanasTercero").slideDown(200);
		}
	});

	$("#calefaccionB").click(function(){

		//$("#menuServicios .nav li").removeClass("active");
		$("#pestanasTercero").finish();

		if($("#ofertasA").hasClass("active")){

			$(".menuTerciario").slideUp();

			$("#menuServicios button").removeClass("active");
			$("#calefaccionB").addClass("active");

			$("#cuerpoPestana>.partePestana:not(#ofertasCalefaccion)").hide();
			$("#ofertasCalefaccion").fadeIn();
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

		//$("#menuServicios .nav li").removeClass("active");
		$("#pestanasTercero").finish();

		if($("#ofertasA").hasClass("active")){

			$(".menuTerciario").slideUp();

			$("#menuServicios button").removeClass("active");
			$("#gasB").addClass("active");

			$("#cuerpoPestana>.partePestana:not(#ofertasGas)").hide();
			$("#ofertasGas").fadeIn();
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

		$(".navPart").removeClass("active");
		$("#ofertasAire, #ofertasAireC").addClass("active");

		$("#cuerpoPestana>.partePestana:not(#ofertasAire)").hide();
		$("#ofertasAire").fadeIn();

	});

	$("#montajeAireC").click(function(){

		$(".navPart").removeClass("active");
		$("#montajeAire, #montajeAireC").addClass("active");

		$("#cuerpoPestana>.partePestana:not(#montajeAire)").hide();
		$("#montajeAire").fadeIn();


	});

	$("#conductosAireC").click(function(){

		$(".navPart").removeClass("active");
		$("#conductosAire, #conductosAireC").addClass("active");

		$("#cuerpoPestana>.partePestana:not(#conductosAire)").hide();
		$("#conductosAire").fadeIn();

	});

	$("#instalacionAireC").click(function(){

		$(".navPart").removeClass("active");
		$("#instalacionAire, #instalacionAireC").addClass("active");

		$("#cuerpoPestana>.partePestana:not(#instalacionAire)").hide();
		$("#instalacionAire").fadeIn();

	});

	$("#mantenimientoAireC").click(function(){

		$(".navPart").removeClass("active");
		$("#mantenimientoAire, #mantenimientoAireC").addClass("active");

		$("#cuerpoPestana>.partePestana:not(#mantenimientoAire)").hide();
		$("#mantenimientoAire").fadeIn();

	});


	$("#ofertasCalefaccionC").click(function(){

		$(".navPart").removeClass("active");
		$("#ofertasCalefaccion, #ofertasCalefaccionC").addClass("active");

		$("#cuerpoPestana>.partePestana:not(#ofertasCalefaccion)").hide();
		$("#ofertasCalefaccion").fadeIn();

	});


	$("#mantenimientoCalefaccionC").click(function(){

		$(".navPart").removeClass("active");
		$("#mantenimientoCalefaccion, #mantenimientoCalefaccionC").addClass("active");

		$("#cuerpoPestana>.partePestana:not(#mantenimientoCalefaccion)").hide();
		$("#mantenimientoCalefaccion").fadeIn();

	});


	$("#ofertasGasC").click(function(){

		$(".navPart").removeClass("active");
		$("#ofertasGas, #ofertasGasC").addClass("active");

		$("#cuerpoPestana>.partePestana:not(#ofertasGas)").hide();
		$("#ofertasGas").fadeIn();

	});

	$("#montajeGasC").click(function(){

		$(".navPart").removeClass("active");
		$("#montajeGas, #montajeGasC").addClass("active");

		$("#cuerpoPestana>.partePestana:not(#montajeGas)").hide();
		$("#montajeGas").fadeIn();

	});

	$("#mantenimientoGasC").click(function(){

		$(".navPart").removeClass("active");
		$("#mantenimientoGas, #mantenimientoGasC").addClass("active");

		$("#cuerpoPestana>.partePestana:not(#mantenimientoGas)").hide();
		$("#mantenimientoGas").fadeIn();

	});

});

function reiniciarNavParts(){

	$("#pestanasTercero").slideUp(200);

	$(".menuTerciario").slideUp();
	$(".navPart").removeClass("active");
}






	
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

	$("#ofertasC").click(function(){

		$(".navPart").removeClass("active");
		$("#ofertasC").addClass("active");

		$("#cuerpoPestana>.partePestana:not(#ofertasAire)").hide();
		$("#ofertasAire").fadeIn();

	});

	$("#montajeC").click(function(){

		$(".navPart").removeClass("active");
		$("#montajeC").addClass("active");

	});

	$("#ofertasConductosC").click(function(){

		$(".navPart").removeClass("active");
		$("#ofertasConductosC").addClass("active");

	});

	$("#solInstalacionC").click(function(){

		$(".navPart").removeClass("active");
		$("#solInstalacionC").addClass("active");

	});

	$("#mantenimientoC").click(function(){

		$(".navPart").removeClass("active");
		$("#mantenimientoC").addClass("active");

	});

});

function reiniciarNavParts(){

	$("#pestanasTercero").slideUp(200);

	$(".menuTerciario").slideUp();
	$(".navPart").removeClass("active");
}
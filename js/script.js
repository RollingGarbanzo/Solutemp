	
$(document).ready(function(){

	$("#cuerpoPestana>div").hide();
	reiniciarNavParts();

	$(".inicioB").addClass("active");

	$("#inicio").show();

	$(".inicioB").click(function(){

		reiniciarNavParts();

		$("#pestanas button").removeClass("active");
		$(".inicioB").addClass("active");

		$("#cuerpoPestana>div").hide();
		$("#inicio").fadeIn();

		$("#menuServicios button").removeClass("active");
		$("#menuServicios").slideDown();
	
	});


	$("#ofertasB").click(function(){

		//$(".nav li").removeClass("active");
		reiniciarNavParts();

		$("#pestanas button").removeClass("active");
		$("#ofertasB").addClass("active");

		$("#cuerpoPestana>div").hide();
		$("#ofertas").fadeIn();

		$("#menuServicios button").removeClass("active");
		$("#menuServicios").slideDown();
	});

	$("#serviciosB").click(function(){

		//$(".nav li").removeClass("active");
		reiniciarNavParts();

		$("#pestanas button").removeClass("active");
		$("#serviciosB").addClass("active");

		$("#cuerpoPestana>div").hide();
		$("#servicios").fadeIn();

		$("#menuServicios button").removeClass("active");
		$("#menuServicios").slideDown();
	});

	$("#contactosB").click(function(){

		//$(".nav li").removeClass("active");
		reiniciarNavParts();

		$("#pestanas button").removeClass("active");
		$("#contactosB").addClass("active");

		$("#cuerpoPestana>div").hide();
		$("#contactos").fadeIn();

		$("#menuServicios button").removeClass("active");
		$("#menuServicios").slideUp();
	});

	$("#quienesB").click(function(){

		//$(".nav li").removeClass("active");
		reiniciarNavParts();

		$("#pestanas button").removeClass("active");
		$("#quienesB").addClass("active");

		$("#cuerpoPestana>div").hide();
		$("#quienes").fadeIn();

		$("#menuServicios button").removeClass("active");
		$("#menuServicios").slideUp();
	});

	//-------------------
	//- MENU SECUNDARIO -
	//-------------------


	$("#aireB").click(function(){

		//$("#menuServicios .nav li").removeClass("active");
		$(".navPart").removeClass("active");
		$(".menuTerciario").finish();

		if($("#ofertasB").hasClass("active")){

			$(".menuTerciario").slideUp();

			$("#menuServicios button").removeClass("active");
			$("#aireB").addClass("active");

			$("#cuerpoPestana>div").hide();
			$("#ofertasAire").fadeIn();
		}
		else{
		
			$("#menuServicios button").removeClass("active");
			$("#aireB").addClass("active");

			$(".menuTerciario").hide(200);
			$("#aireC").slideDown(200);
		}
	});

	$("#calefaccionB").click(function(){

		//$("#menuServicios .nav li").removeClass("active");
		$(".navPart").removeClass("active");
		$(".menuTerciario").finish();

		if($("#ofertasB").hasClass("active")){

			$(".menuTerciario").slideUp();

			$("#menuServicios button").removeClass("active");
			$("#calefaccionB").addClass("active");

			$("#cuerpoPestana>div").hide();
			$("#ofertasCalefaccion").fadeIn();
		}
		else{

			$("#menuServicios button").removeClass("active");
			$("#calefaccionB").addClass("active");

			$(".menuTerciario").hide(200);
			$("#calefaccionC").slideDown(200);
		}

	});

	$("#gasB").click(function(){

		//$("#menuServicios .nav li").removeClass("active");
		$(".navPart").removeClass("active");
		$(".menuTerciario").finish();

		if($("#ofertasB").hasClass("active")){

			$(".menuTerciario").slideUp();

			$("#menuServicios button").removeClass("active");
			$("#gasB").addClass("active");

			$("#cuerpoPestana>div").hide();
			$("#ofertasGas").fadeIn();
		}
		else{

			$("#menuServicios button").removeClass("active");
			$("#gasB").addClass("active");

			$(".menuTerciario").hide(200);
			$("#gasC").slideDown(200);
		}

	});

	//--------------------
	//- MENUS TERCIARIOS -
	//--------------------

	$("#ofertasC").click(function(){

		$(".navPart").removeClass("active");
		$("#ofertasC").addClass("active");

		$("#cuerpoPestana>div").hide();
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

	$(".menuTerciario").slideUp();
	$(".navPart").removeClass("active");
}
	
$(document).ready(function(){

	$("#cuerpoPestana>div").hide();
	$(".inicioB").addClass("active");

	$("#inicio").show();

	$(".inicioB").click(function(){

		$(".nav li").removeClass("active");
		$(".inicioB").addClass("active");

		$("#cuerpoPestana>div").hide();
		$("#inicio").fadeIn(100);

		$("#menuServicios").slideDown();
	
	});


	$("#ofertasB").click(function(){

		$(".nav li").removeClass("active");
		$("#ofertasB").addClass("active");

		$("#cuerpoPestana>div").hide();
		$("#ofertas").fadeIn();

		$("#menuServicios").slideDown();
	});

	$("#serviciosB").click(function(){

		$(".nav li").removeClass("active");
		$("#serviciosB").addClass("active");

		$("#cuerpoPestana>div").hide();
		$("#servicios").fadeIn();

		$("#menuServicios").slideDown();
	});

	$("#contactosB").click(function(){

		$(".nav li").removeClass("active");
		$("#contactosB").addClass("active");

		$("#cuerpoPestana>div").hide();
		$("#contactos").fadeIn();
		$("#menuServicios").slideUp();
	});

	$("#quienesB").click(function(){

		$(".nav li").removeClass("active");
		$("#quienesB").addClass("active");

		$("#cuerpoPestana>div").hide();
		$("#quienes").fadeIn();
		$("#menuServicios").slideUp();
	});

	$(".inicioB").click(function(){

		$(".nav li").removeClass("active");
		$(".inicioB").addClass("active");

		$("#cuerpoPestana>div").hide();
		$("#inicio").fadeIn();

		$("#menuServicios").slideDown();
	
	});

	//MENU SECUNDARIO


	$("#aireB").click(function(){

		$("#menuServicios .nav li").removeClass("active");
		$("#aireB").addClass("active");

	});

	$("#calefaccionB").click(function(){

		$("#menuServicios .nav li").removeClass("active");
		$("#calefaccionB").addClass("active");

	});

	$("#gasB").click(function(){

		$("#menuServicios .nav li").removeClass("active");
		$("#gasB").addClass("active");

	});

});

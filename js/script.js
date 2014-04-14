	
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

});

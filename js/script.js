
$(document).ready(function(){


	inicializaPagina();

	//-----------------
	//- MENU PRIMARIO -
	//-----------------


	$(".inicioA").click(function(){

		clickElementoPrimarioConSecund(this);
		
	});

	$("#ofertasA").click(function(){

		clickElementoPrimarioConSecund(this);
	});

	$("#serviciosA").click(function(){

		clickElementoPrimarioConSecund(this);
	});

	$("#contactosA").click(function(){

		clickElementoPrimarioSinSecund(this);
	});

	$("#quienesA").click(function(){

		clickElementoPrimarioSinSecund(this);
	});

	//-------------------
	//- MENU SECUNDARIO -
	//-------------------


	$("#aireB").click(function(){

		clickElementoSecundario(this, "#aireC");
	});

	$("#calefaccionB").click(function(){

		clickElementoSecundario(this, "#calefaccionC");

	});

	$("#gasB").click(function(){

		clickElementoSecundario(this, "#gasC");

	});

	//--------------------
	//- MENUS TERCIARIOS -
	//--------------------

	$("#ofertasAireC").click(function(){

		clickElementoTerciario(this);

	});

	$("#montajeAireC").click(function(){

		clickElementoTerciario(this);

	});

	$("#conductosAireC").click(function(){

		clickElementoTerciario(this);
	});

	$("#instalacionAireC").click(function(){

		clickElementoTerciario(this);

	});

	$("#mantenimientoAireC").click(function(){

		clickElementoTerciario(this);

	});


	$("#ofertasCalefaccionC").click(function(){
		
		clickElementoTerciario(this);

	});


	$("#mantenimientoCalefaccionC").click(function(){

		clickElementoTerciario(this);

	});


	$("#ofertasGasC").click(function(){

		clickElementoTerciario(this);

	});

	$("#montajeGasC").click(function(){

		clickElementoTerciario(this);

	});

	$("#mantenimientoGasC").click(function(){

		clickElementoTerciario(this);
	});

});

function clickElementoTerciario(element){

	var tieneClaseI = $(element).hasClass("active");

	if(!tieneClaseI)
	{
		$(element).addClass("active");	
		window.location.href = $(element).attr("href");
	}

}

function clickElementoSecundario(element, aDescubrir){

	$("#pestanasTercero").finish();

	if($("#ofertasA").hasClass("active")){

		if(!$(element).hasClass("active")){
			window.location.href = $(element).attr("href");
		}
	}
	else{
		
		$("#menuServicios button").removeClass("active");
		$(element).addClass("active");

		$("#pestanasTercero").slideUp(100, function(){

			$(".menuTerciario").hide();
			$(aDescubrir).show();
			$("#pestanasTercero").slideDown(100);
		});
	}
}

function clickElementoPrimarioSinSecund(element){

	var tieneClaseI = $(element).hasClass("active");

	var href = $(element).attr("href");

	if(!tieneClaseI){
		$(".menuTerciario .navPart").removeClass("active");
		$(element).addClass("active");
	}

	$("#pestanasTercero").slideUp(100, function(){

		$("#menuServicios").slideUp(100, function(){

			if(!tieneClaseI){

				window.location.href = href;

			}

			$(".menuTerciario").hide();
		});

	});
}

function clickElementoPrimarioConSecund(element){

	var tieneClaseI = $(element).hasClass("active");

	var href = $(element).attr("href");

	if(!tieneClaseI){
		$("#pestanasTercero .navPart").removeClass("active");
		$(element).addClass("active");
	}

	$("#pestanasTercero").slideUp(100, function(){

		$("#menuServicios").slideDown(100, function(){

			if(!tieneClaseI){

				window.location.href = href;

			}

			$(".menuTerciario").hide();
		});

	});
}

function inicializaPagina(){

	$("#pestanasTercero").hide();

	$(".partePestana").hide();
	$(".partePestana").fadeIn("slow");
}


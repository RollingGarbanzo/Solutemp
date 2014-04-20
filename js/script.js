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
	


	/*--------------
	---FORMULARIO --
	----------------*/

	$(".toggleForm").click(function(){


		$("#dropDownFormulario").slideToggle();

		if(!$(".toggleForm").hasClass("active"))
			$(".toggleForm").addClass("active");
		else
			$(".toggleForm").removeClass("active");
	});


	$("#botonEmail").click(function(){

		$("#successEmail").fadeOut(150);
		$("#errorEmail").fadeOut(150);		

		if(!$(".toggleForm").hasClass("active"))
			$(".toggleForm").addClass("active");
		else
			$(".toggleForm").removeClass("active");

		$.ajax({
		    url : "./form.php",
		    type: "POST",
		    data : {autor : $("#autorForm").val(),emailRespuesta : $("#emailRespuestaForm").val(), asunto: $("#asuntoForm").val() ,mensaje : $("#mensajeEmailForm").val()},
		    success: function(data)
		    {
		    	$("#successEmail").fadeIn();
		    	$("#dropDownFormulario").slideUp(200);
		    },
		    error: function (jqXHR, textStatus, errorThrown)
		    {
		    	$("#errorEmail").fadeIn();
		    	$("#dropDownFormulario").slideUp(200);
		    }
		});

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
			$(element).addClass("active");
			window.location.href = $(element).attr("href");
		}
	}
	else{
		
		$("#menuServicios button").removeClass("active");
		$(element).addClass("active");

		$("#pestanasTercero").slideUp(200, function(){

			$(".menuTerciario").hide();
			$(aDescubrir).show();
			$("#pestanasTercero").slideDown(200);
		});
	}
}

function clickElementoPrimarioSinSecund(element){

	var tieneClaseI = $(element).hasClass("active");

	var href = $(element).attr("href");

	$("#menuServicios button").removeClass("active");

	if(!tieneClaseI){
		$(".menuTerciario .navPart").removeClass("active");
		$(element).addClass("active");
	}

	$("#pestanasTercero").slideUp(200, function(){

		$("#menuServicios").slideUp(200, function(){

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

	$("#menuServicios button").removeClass("active");

	if(!tieneClaseI){
		$("#pestanasTercero .navPart").removeClass("active");
		$(element).addClass("active");
	}

	$("#pestanasTercero").slideUp(200, function(){

		$(".menuTerciario .navPart").removeClass("active");

		$("#menuServicios").slideDown(200, function(){

			if(!tieneClaseI){

				window.location.href = href;

			}

			$(".menuTerciario").hide();
		});

	});
}

function inicializaPagina(){

	$("#errorEmail").hide();
	$("#successEmail").hide();
	$("#dropDownFormulario").hide();
	$(".partePestana").hide();
	$(".partePestana").fadeIn("slow");
}


//Lee los valores GET de un URL y lo devuelve como un array de Strings.
	
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
$( document ).ready(function(){
	$(".button-collapse").sideNav();
	verificaCookieEU();
	$("#modalEU-ok").click( function(){
		$.cookie('cookieEUPolicy', 'ok', { expires: 30 });
	});
});

/********* Gestione Notifica dei Cookie **************/
function verificaCookieEU(){
	if( $.cookie('cookieEUPolicy') == undefined ){
		//Show Modal
		$('#modalEU').openModal();
	} 
}
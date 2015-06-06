$( document ).ready(function(){
	$(".button-collapse").sideNav();
	verificaCookieEU();
	$("#modalEU-ok").click( function(){
		$.cookie('cookieEUPolicy', 'ok', { expires: 30 });
	});
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

function verificaCookieEU(){
	if( $.cookie('cookieEUPolicy') == undefined ){
		//Show Modal
		$('#modalEU').openModal();
		// Inserisci handler per lo scroll
		$( document ).scroll( function(){
			//Imposta cookie
			$.cookie('cookieEUPolicy', 'ok', { expires: 30 });
			//Chiudi Modal
			$('#modalEU').closeModal();
			//Elimina Handler
			$( document ).unbind("scroll");
			avviaAnalytics();
			caricaRisorse();
		});
	} else {
		avviaAnalytics();
		caricaRisorse();
	}
}

function caricaRisorse(){
	$.getScript("https://apis.google.com/js/plusone.js");
}
/********* Gestione Notifica dei Cookie **************/

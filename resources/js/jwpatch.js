/**
 * JWPlayer 8.3.3 Patcher
 * https://github.com/masgasatriawirawan
 */
!function() {
	var ajax = new window.XMLHttpRequest();
	ajax.responseType = 'text';
	ajax.open( 'GET', 'https://ssl.p.jwpcdn.com/player/v/8.3.3/jwplayer.js', true );
	ajax.onload = function() {
		if ( ajax.readyState === ajax.DONE && ajax.status === 200 ) {
			var scriptContent = ajax.responseText.replace( 'if("invalid"===c||"expired"===c){var m=void 0===a?"missing":c;u.error=new f.a("Error setting up player: "+(i=m).substr(0,1).toUpperCase()+i.substr(1)+" license key",function(t){switch(t){case"missing":return f.d;case"expired":return f.b;default:return f.c}}(m))}', '' );
			var script = window.document.createElement( 'script' );
			var scriptBlob = new window.Blob( [ scriptContent ], {
				type: 'text/javascript'
			} );
			var scriptSrc = window.URL.createObjectURL( scriptBlob );
			script.type = 'text/javascript';
			script.src = scriptSrc;
			script.onload = function() {
				window.drivexceed();
			};
			window.document.body.appendChild( script );
			script.remove();
		}
	};
	ajax.send();
}();
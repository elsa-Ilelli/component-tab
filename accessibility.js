/*/////////////////////////////////*/
/*       Module Accessibilité      */
/*/////////////////////////////////*/

//Autorise le focus uniquement pour les utilisateurs sans souris

(function(document, window){
	if (!document || !window) {
		return;
	}
	
	var styleText = '::-moz-focus-inner{border:0 !important;}:focus{outline: none !important;';
	var unfocus_style = document.createElement('STYLE');

	window.unfocus = function(){
		document.getElementsByTagName('HEAD')[0].appendChild(unfocus_style);

		document.addEventListener('mousedown', function(){
			unfocus_style.innerHTML = styleText+'}';
		});
		document.addEventListener('keydown', function(){
			unfocus_style.innerHTML = '';
		});
	};

	unfocus.style = function(style){
		styleText += style;
	};

	unfocus();
})(document, window);
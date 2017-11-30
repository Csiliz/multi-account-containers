(function() {
	//Localize by replacing __MSG_***__ meta tags
	try {
		// This not work!
		//var objects = document.getElementsByTagName('html');
		var objects = document.getElementsByTagName('body');
		//var objects = document.getElementsByTagName('localizable');
		for (var j = 0; j < objects.length; j++) {
			var obj = objects[j];
			var valStrH = obj.innerHTML.toString();
			var valNewH = valStrH.replace(/__MSG_(\w+)__/g, function(match, v1) {
				return v1 ? browser.i18n.getMessage(v1) : "";
			});

			if(valNewH != valStrH) {
				obj.innerHTML = valNewH;
				//console.log(valNewH);
			}
	    }
	}
	catch (e) {
		//console.log("Localization error: " + e.message);
	}
})();

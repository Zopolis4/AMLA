// ==UserScript==
// @name	Automatic Mediafire Link Archiver
// @namespace      Zopolis4
// @description    Automatically archives all mediafire links on pages you visit by sending them to ArchiveTeam.
// @version	1.0.1
// @match	*
// @run-at document-start
// ==/UserScript==

(function() {

	document.addEventListener("DOMContentLoaded", function() {
		if (location.hostname == "www.mediafire.com") {
                        fetch("https://urls.ajay.app/api/submitURLs", {
			  method: "POST",
			  body: JSON.stringify({
			    urls: [ location.href ]
			  }),
			  headers: {
                            "Content-Type": "application/json"
			  }
			});
			console.log("Sent " + location.href + " To https://urls.ajay.app/");
		}
	});



	window.addEventListener("load", function() {
		for (var elements1 = document.getElementsByTagName("a"), i = elements1.length - 1; i >= 0; i--) {
			if (elements1[i].hostname == "www.mediafire.com" || elements1[i].hostname == "www.mfi.re") {
				fetch("https://urls.ajay.app/api/submitURLs", {
				  method: "POST",
				  body: JSON.stringify({
				    urls: [ elements1[i].href ]
				  }),
				  headers: {
				    "Content-Type": "application/json"
				  }
				});
		                console.log("Sent " + elements1[i].href + " To https://urls.ajay.app/");
			}
		}

	});
}());

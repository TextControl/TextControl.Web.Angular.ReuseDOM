function attachEvents() {
    
	// event for previous tab
	$(".nav-tabs button").on("hide.bs.tab", function(){

		// previous tab name
		var oldTab = $(this).attr("aria-controls");

		// save the document to local storage
		TXTextControl.saveDocument(TXTextControl.StreamType.InternalUnicodeFormat,
								   function (e) {
			localStorage.setItem('tx-document_' + oldTab, e.data);
		});

	});

	// event for current tab
	$(".nav-tabs button").on("show.bs.tab", function(){

		// current tab name
		var newTab = $(this).attr("aria-controls");

		// get the previously stored document from local storage
		const document = localStorage.getItem('tx-document_' + newTab);

		// if document is not null, load the document
		// and move the editor in DOM to new tab location
		if (document !== null) {

			TXTextControl.loadDocument(TXTextControl.StreamType.InternalUnicodeFormat,
									   document, function() {
				$("#tx-editor").appendTo("#" + newTab);
			});

		}
		// if document is null, clear the Text Control and move in DOM
		else {
			TXTextControl.resetContents(function() {
				$("#tx-editor").appendTo("#" + newTab);
			});
		}

    })
}
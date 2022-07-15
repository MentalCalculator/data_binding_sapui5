sap.ui.require([
	"sap/m/Text",
    "sap/ui/model/json/JSONModel"
], function (Text, JSONModel) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
        // Create a JSON model from an object literal
            let oModel = new JSONModel({
                greetingText: "Hi, my name is Humana Calculator."
            })
        })

		// Create a text UI element that displays a hardcoded text string
		new Text({text: "Hi, my name is Humana Calculator."}).placeAt("content");
});
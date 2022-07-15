sap.ui.require([
	"sap/m/Text",
	"sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/resource/ResourceModel"
], function (Text, JSONModel, XMLView, ResourceModel) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
		// Create a JSON model from an object literal
		let oModel = new JSONModel({
			firstName: "Humana",
            lastName: "Calculator",
            enabled: true,
		});

		// Assign the model object to the SAPUI5 core
		sap.ui.getCore().setModel(oModel);

        let oResourceModel = new ResourceModel({
			bundleName: "sap.ui.demo.db.i18n.i18n",
			supportedLocales: ["", "lv"],
			fallbackLocale: ""
		});

        // Assign the model object to the SAPUI5 core using the name "i18n"
		sap.ui.getCore().setModel(oResourceModel, "i18n");

		// Display the XML view called "App"
		new XMLView({
			viewName: "sap.ui.demo.db.view.App"
		}).placeAt("content");
	});
});
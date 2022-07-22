sap.ui.require([
	"sap/m/Text",
	"sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/resource/ResourceModel"
], function (Text, JSONModel, XMLView, ResourceModel) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
        var oProductModel = new JSONModel();
		oProductModel.loadData("./model/Products.json");
		sap.ui.getCore().setModel(oProductModel, "products");

		// Create a JSON model from an object literal
		let oModel = new JSONModel({
			firstName: "Humana",
            lastName: "Calculator",
            enabled: true,
            address: {
                street: "Daugavas Street 17",
                city: "Kraslava",
                zip: "5601",
                country: "Latvia"
            },
            salesAmount: 99.99,
            currencyCode: "EUR"
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
		let oView = new XMLView({
            viewName: "sap.ui.demo.db.view.App"
        });

        // Register the view with the message manager
        sap.ui.getCore().getMessageManager().registerObject(oView, true);

        // Insert the view into the DOM
        oView.placeAt("content");
	});
});
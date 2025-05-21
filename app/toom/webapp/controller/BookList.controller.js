sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], (Controller) => {
  "use strict";

  return Controller.extend("toom.controller.InvoiceList", {
    onPress(oEvent) {
      const oItem = oEvent.getSource();
      const oRouter = this.getOwnerComponent().getRouter();
      oRouter.navTo("detail", {
        bookPath: window.encodeURIComponent(oItem.getBindingContext("books").getPath().substring(1))
      });
    }
  });
});

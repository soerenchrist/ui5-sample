import Control from "sap/ui/core/Control";
import XMLView from "sap/ui/core/mvc/XMLView";
import UIComponent from "sap/ui/core/UIComponent";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";

/**
 * @namespace toom
 */
export default class Component extends UIComponent {
  public static metadata = {
    interfaces: ["sap.ui.core.IAsyncContentCreation"],
  };

  init(): void {
    super.init();

    const data = {
      recipient: {
        name: "World",
      },
    };

    const dataModel = new JSONModel(data);
    this.setModel(dataModel);

    const i18nModel = new ResourceModel({
      bundleName: "toom.i18n.i18n",
    });
    this.setModel(i18nModel, "i18n");
  }

  createContent(): Control | Promise<Control | null> | null {
    return XMLView.create({
      viewName: "toom.view.App",
      id: "app",
    });
  }
}

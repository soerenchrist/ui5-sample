import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
import Event from "sap/ui/base/Event"
import ObjectListItem from "sap/m/ObjectListItem";

/**
  * @namespace toom.controller
  */
export default class App extends Controller {
  onPress(event: Event): void {
    const item = event.getSource() as ObjectListItem;

    const path = item.getBindingContext("books")?.getPath().substring(1)
    if (!path) return;

    const router = UIComponent.getRouterFor(this);
    router.navTo("detail", {
      bookPath: window.encodeURIComponent(path)
    })
  }
}

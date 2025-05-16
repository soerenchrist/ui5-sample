import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
import { Route$PatternMatchedEvent } from "sap/ui/core/routing/Route";
import History from "sap/ui/core/routing/History";
import { ProductRating$ChangeEvent } from "toom/control/ProductRating";
import MessageToast from "sap/m/MessageToast";

/**
  * @namespace toom.controller
  */
export default class Detail extends Controller {
  onInit(): void | undefined {
      const router = UIComponent.getRouterFor(this);
      router.getRoute("detail")?.attachPatternMatched(this.onObjectMatched, this)
  }

  onObjectMatched(event: Route$PatternMatchedEvent): void {
    const param = (event.getParameter("arguments") as any).bookPath
    const path = window.decodeURIComponent(param)
    const view = this.getView()
    if (!view) {
      console.log("no view")
      return
    }
    view.bindElement({
      path: "/" + path,
      model: "books"
    })
  }

  onNavBack(): void {
    const history = History.getInstance();
    const previousHash = history.getPreviousHash();

    if (previousHash !== undefined) {
      window.history.go(-1)
    } else {
      const router = UIComponent.getRouterFor(this);
      router.navTo("overview", {}, true)
    }
  }

  onRatingChange(event: ProductRating$ChangeEvent): void {
    const value = event.getParameter("value")

    MessageToast.show(`Rated with ${value}`)
  }
}

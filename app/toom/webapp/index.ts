import ComponentContainer from "sap/ui/core/ComponentContainer";

new ComponentContainer({
  id: "container",
  name: "toom",
  settings: {
    id: "root",
  },
  autoPrefixId: true,
  async: true,
}).placeAt("content");

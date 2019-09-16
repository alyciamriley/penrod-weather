var m = require("mithril")

var searchBar = { 
    view: function() {
        return m(".slds-form-element", [
            m("label", {class: "slds-form-element__label", for: "text-input-id-1"})
        ]),
        m(".slds-form-element__control")
/* <div class="slds-form-element">
  <label class="slds-form-element__label" for="text-input-id-1">
    <abbr class="slds-required" title="required">* </abbr>Input Label</label>
  <div class="slds-form-element__control">
    <input type="text" id="text-input-id-1" placeholder="Placeholder Text" required="" class="slds-input" />
  </div>
</div>  */
    }
}
module.exports = searchBar;

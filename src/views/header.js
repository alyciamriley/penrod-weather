var m = require("mithril")

var Header = { 
    view: function() {
    return m(".slds-page-header", [
        m(".slds-page-header__row", [
            m(".slds-page-header__col-title", [
                m(".slds-media", [
                    m(".slds-media__figure", [
                        m("span", {class: "slds-icon_container slds-icon-standard-opportunity"}, [
                            m("img", {
                                src: "src/images/icon.jpg"
                            })
                        ])
                    ])
                ],
                m(".slds-media__body", [
                    m(".slds-page-header__name", [
                        m(".slds-page-header__name-title", [
                            m("h1", [
                                m("span", {class:"slds-page-header__title slds-truncate"}, "Penrod Weather")
                            ])
                        ])
                    ])
                ],
                m("p", {class:"slds-page-header__name-meta"}, "Because Winter is coming."))
                )
            ])
        ])
    ])
    }
}
module.exports = Header;

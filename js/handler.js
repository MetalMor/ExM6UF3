/**
 * Created by mor on 5/04/16.
 */

function DOMhandler() {
    this.elementStyles = new ElementStyles();
    this.modElement = function(selector) {
        var newStyle = this.getNewStyle(selector);
        for (var attr in newStyle)  {
            this.applyStyle(selector, {key: attr, value: newStyle[attr]});
        }
    };
    this.getNewStyle = function(selector) {
        return this.elementStyles.style(selector);
    };
    this.applyStyle = function(selector, attr) {
        $(selector).css(attr.key.replace("_", "-"), attr.value);
    };
    this.isNullOrUndefined = function(smth) {
        return smth === undefined || smth === null;
    };
};
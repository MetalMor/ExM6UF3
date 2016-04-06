/**
 * Created by mor on 5/04/16.
 */

function DOMhandler() {
    this.elementStyles = new ElementStyles();
    this.modElement = function(selector) {
        if(!this.isNullOrUndefined(selector)) {
            var newStyle = this.elementStyles.style(selector)
            for (var attr in newStyle)  {
                this.applyStyle(selector, {key: attr, value: newStyle[attr]});
            }
        }
    };
    this.applyStyle = function(selector, attr) {
        $(selector).css(attr.key.replace("_", "-"), attr.value);
    };
    this.areNullOrUndefined = this.elementStyles.areNullOrUndefined;
    this.isNullOrUndefined = this.elementStyles.isNullOrUndefined;
};
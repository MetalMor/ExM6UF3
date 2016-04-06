/**
 * Created by mor on 4/04/16.
 */
/*window.DOMhandler = {
    modElement: function(selector, attr, value) {
        $(selector).css(attr, value);
    }
};*/

function DocumentReady() {
    var handler = new DOMhandler();
    var elements = new ElementSelectors();
    handler.modElement(elements.mainLists);
    handler.modElement(elements.links);
    handler.modElement(elements.henryLi);
    handler.modElement(elements.emailLinks);
    handler.modElement(elements.pdfLinks);
    handler.modElement(elements.auxList);
}
$(document).ready(DocumentReady)
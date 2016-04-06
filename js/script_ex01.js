/**
 * Created by mor on 4/04/16.
 * JQuery - Exercici 01
 */
function DocumentReady() {
    var handler = new DOMhandler();
    var elements = new ElementSelectors();

    // Lista de elementos que van a ser modificados
    var modifications =
        [elements.mainLists,
         elements.links,
         elements.henryLi,
         elements.emailLinks,
         elements.pdfLinks,
         elements.auxList];

    handler.modElements(modifications);
}
$(document).ready(DocumentReady)

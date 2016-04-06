/**
 * Created by mor on 6/04/16.
 * JQuery - Exercici 02
 */
function DocumentReady() {
    var handler = new DOMhandler();
    var elements = new ElementSelectors();

    // Lista de elementos que van a ser modificados
    var modifications =
        [elements.sonnetsTable,
            elements.tableHead,
            elements.tableOdd,
            elements.sonnetsSecondChild,
            elements.sonnetsThirdChild,
            elements.henryTd,
            elements.henryNeighbour];

    handler.modElements(modifications);
}
$(document).ready(DocumentReady)

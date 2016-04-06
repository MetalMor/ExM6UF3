/**
 * Created by mor on 6/04/16.
 * JQuery - Exercici 02
 */
function DocumentReady() {
    var handler = new DOMhandler();
    var elements = new ElementSelectors();

    // Lista de elementos que van a ser modificados
    var modifications =
        [this.sonnetsTable,
         this.tableHead,
         this.tableOdd,
         this.sonnetsSecondChild,
         this.sonnetsThirdChild,
         this.henryTd,
         this.henryNeighbour];

    handler.modElements(modifications);
}
$(document).ready(DocumentReady)

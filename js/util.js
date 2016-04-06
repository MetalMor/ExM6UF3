/**
 * Created by mor on 6/04/16.
 */
/**
 * Constructor de objetos de utilidad (funciones varias)
 */
function Util() {
    // Retorna true si encuentra un elemento nulo o indefinido, false en caso contrario
    this.areNullOrUndefined = function(arrayOrObject) {
        for (x in arrayOrObject)
            if (this.isNullOrUndefined(arrayOrObject[x]))
                return true;
        return false;
    };
    // Retorna true si el parametro es indefinido o nulo, false en caso contrario
    this.isNullOrUndefined = function(smth) {
        return smth === undefined || smth === null;
    };
}
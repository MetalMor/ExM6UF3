/**
 * Created by mor on 5/04/16.
 */

/**
 * Agrupa los posibles selectores para usarlos en los ejercicios.
 *
 * Se usan selectores normales de CSS en forma de string, que son llamados
 * para referenciar a uno o varios elementos, o para escoger el estilo correspondiente
 * de entre los predefinidos en la clase ElementStyles.
 *
 * IMPORTANTE: los nombres de las propiedades de ElementStyles y ElementSelectors deben
 * coincidir. Gracias a eso, se consigue la obtención de los atributos de forma dinámica.
 */
function ElementSelectors() {
    // Ex01
    this.mainLists = "ul.global>li";
    this.links = "a";
    this.emailLinks = this.links + ".email";
    this.pdfLinks = this.links + ".pdf";
    this.henryLi = "ul.main>li:contains('Henry')";
    this.auxList = "ul.aux";

    // Ex02
    this.sonnetsTable = "table#sonnets";
    this.tableHead = "table#novels th";
    this.tableOdd = this.sonnetsTable + " tr:nth-child(odd)";
    this.sonnetsSecondChild = this.sonnetsTable + " tr:nth-child(2)";
    this.sonnetsThirdChild = this.sonnetsTable + " tr:nth-child(3)";
    this.henryTd = "td:contains('Henry')";
    this.henryNeighbour = "tr:contains('Henry')>td:not(:first-child)";
}

/**
 * Contiene los objetos que contienen los datos para el style de los elementos a modificar.
 *
 * En forma de objetos de javascript, se determinan los atributos que serán modificados
 * por el jQuery ({attr: "val"}). En la funcion style(...) se recuperan dinámicamente los
 * estilos correspondientes a cada selector.
 *
 * No se puede usar el guión en un objeto de javascript (carácter reservado), por tanto, los
 * guiones en los nombres de los atributos de CSS se sustituyen por guiones bajos (el
 * handler se encarga de arreglarlo).
 *
 * IMPORTANTE: los nombres de las propiedades de ElementStyles y ElementSelectors deben
 * coincidir. Gracias a eso, se consigue la obtención de los atributos de forma dinámica.
 */
function ElementStyles(element) {

    // Objeto de funciones de utilidad
    this.utils = new Util();
    // Conjunto de selectores
    this.selectors = new ElementSelectors();

    // Objetos que contienen los atributos correspondientes a cada selector
    // Ex01
    this.mainLists = {float: "left", background_color: "lightgrey"};
    this.links = {color: "forestgreen"};
    this.emailLinks = {background_color: "tomato"};
    this.pdfLinks = {background_color: "aquamarine"};
    this.henryLi = {font_weight: "bold"};
    this.auxList = {font_weight: "normal"};

    // Ex02
    this.sonnetsTable = {background_color: "tomato"};
    this.tableHead = {background_color: "aqua"};
    this.tableOdd = {background_color: "lightgrey"};
    this.sonnetsSecondChild = {font_weight: "bold"};
    this.sonnetsThirdChild = {font_style: "italic"};
    this.henryTd = {font_weight: "bold"};
    this.henryNeighbour = {font_style: "italic"};

    // Devuelve el estilo correspondiente a un selector especificado por parámetro.
    // Para que funcione bien, los nombres de las propiedades de ElementStyles y ElementSelectors deben coincidir.
    this.style = function(selector) {
        var selectors = this.selectors;
        for (var x in selectors)
            if(selectors[x] === selector) return this[x];
    };

    this.addStyle = function(selKey, selValue, newStyle) {
        if(!this.areNullOrUndefined([selKey, selValue, newStyle])) {
            this[selKey] = newStyle;
            this.selectors.selKey = selValue;
        }
    };

    this.isNullOrUndefined = this.utils.isNullOrUndefined;
    this.areNullOrUndefined = this.utils.areNullOrUndefined;

};

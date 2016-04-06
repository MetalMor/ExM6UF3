/**
 * Created by mor on 5/04/16.
 */

/**
 * Controlador de las funciones de los ejercicios: aquí es donde se usa el jQuery :D
 * Funcionalidades implementadas:
 *      - Modifica un elemento a partir de su selector (debe haber un objeto asociado en la clase ElementStyles).
 *      - Modifica un conjunto de elementos a la vez, iterándolos de uno en uno.
 * TODO:
 *      - Lógica para añadir eventos de forma dinámica guay, como hasta ahora C:
 */
function DOMhandler() {
    // Objeto de funciones de utilidad
    this.utils = new Util();
    // Objeto del que se obtienen los estilos
    this.elementStyles = new ElementStyles();

    // Modifica el estilo de un elemento de forma predeterminada (a partir del objeto definido en la clase ElementStyles)
    this.modElement = function(selector, effect, time, callback) {
        if(!this.isNullOrUndefined(selector)) {
            var newStyle = this.elementStyles.style(selector)
            for (var attr in newStyle)  {
                this.applyStyle(selector, {key: attr, value: newStyle[attr]});
            }
        }
    };
    // Modifica los estilos de un array de elementos (de uno en uno)
    this.modElements = function (selectors) {
        for (var selector in selectors)
            this.modElement(selectors[selector]);
    };
    // Obtiene el objeto que contiene los datos del nuevo estilo a partir del selector especificado por parámetro
    this.getNewStyle = function(selector) {
        return this.elementStyles.style(selector);
    };
    // Aplica el atributo a los elementos seleccionados
    this.applyStyle = function(selector, attr) {
        $(selector).css(this.clean(attr.key), attr.value);
    };
    // Aplica el efecto especificado (time y callback incluidos) al selector
    this.applyEffect = function(selector, effect, time, callback) {
        $(selector)[effect](time, callback);
    };
    this.styleMode = function(effect, time, callback) {
        return this.areNullOrUndefined([effect, time, callback]);
    };

    this.areNullOrUndefined = this.utils.areNullOrUndefined;
    this.isNullOrUndefined = this.utils.isNullOrUndefined;

    // Cambia el guion bajo por un guion normal (los atributos de CSS usan guiones, sin embargo, una propiedad de javascript no puede usarlos)
    this.clean = function(str){
        return str.replace("_", "-");
    };
};

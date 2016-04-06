/**
 * Created by mor on 5/04/16.
 */
function ElementSelectors() {
    this.mainLists = "ul.global>li";
    this.links = "a";
    this.emailLinks = "a.email";
    this.pdfLinks = "a.pdf";
    this.henryLi = "ul.main>li:contains('Henry')";
    this.auxList = "ul.aux";
}

function ElementStyles(element) {
    this.selectors = new ElementSelectors();
    this.mainLists = {float: "left", background_color: "lightgrey"};
    this.links = {color: "forestgreen"};
    this.emailLinks = {background_color: "tomato"};
    this.pdfLinks = {background_color: "aquamarine"};
    this.henryLi = {font_weight: "bold"};
    this.auxList = {font_weight: "normal"};
    this.style = function(selector) {
        var selectors = this.selectors;
        for (var x in selectors)
            if(selectors[x] === selector) return this[x];
    };
};
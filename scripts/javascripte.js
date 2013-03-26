function Doc() {
    this.el = null;
}
;
Doc.prototype.getEl = function Doc(t$1) {
    this.el = document.getElementById(t$1);
    return this;
};
Doc.prototype.texte = function Doc(txt$3) {
    if (!this.el)
        return this;
    this.el.innerHTML = txt$3;
    return this;
};
setTimeout(function Salutation(x$7) {
    x$7 = 1;
}, 10);
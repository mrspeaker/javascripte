window.jse = "macro Bonjour {" +
"	case $name => {" +
"		'Programme en $name'" +
"	}" +
"}" +
"" +
"macro Fonction {" +
"  case $name $params $body => {" +
"    function $name $params $body" +
"  }" +
"}" +
"" +
"macro Soit {" +
"  case $e => {" +
"    var $e" +
"  }" +
"}" +
"" +
"macro Retourner {" +
"	case $e => {" +
"		return $e" +
"	}" +
"}" +
"" +
"macro Afficher {" +
"	case $e (,) ... => {" +
"		console.log $e ..." +
"	}" +
"}" +
"" +
"macro Erreur {" +
"	case $e (,) ... => {" +
"		console.error $e ..." +
"	}" +
"}" +
"" +
"macro Si {" +
"	case $c Alors $b Sinon $e => {" +
"		if $c $b else $e" +
"	}" +
"}" +
"" +
"macro Alerter {" +
"	case $msg => {" +
"		alert $msg" +
"	}" +
"}" +
"" +
"macro Minuteur {" +
"	case $body => {" +
"		setInterval $body" +
"	} " +
"}" +
"" +
"macro ObtenirParIdentifiant {" +
"	case $el => { new Doc().getEl($el) }" +
"}" +
"" +
"function Doc() {" +
"	this.el = null;" +
"};" +
"Doc.prototype.getEl = function(t) {" +
"	this.el = document.getElementById(t);" +
"	return this;" +
"};" +
"Doc.prototype.texte = function(txt) {" +
"	if(!this.el) return this;" +
"	this.el.innerHTML = txt;" +
"	return this;" +
"}" +
"" +
"";
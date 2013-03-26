
require(["sweet", "jse"], function(sweet) {
  var code = document.querySelectorAll("script[type='texte/javascripte']");//.text;
  var texts = [];
  for(var i = 0; i < code.length; i++) {
  	texts.push(code.item(i).text);
  }
  var codeText = texts.join(";");

  eval(sweet.compile(jse + codeText));
});
"use strict";
var newWindowLink = document.getElementById("new-window");
newWindowLink.addEventListener("click", function() {
  var newWindow = window.open("", "_blank", "popup=yes, width=700, height=800, menubar=yes, location=yes, titlebar=yes, scrollbars=yes, status=yes, toolbar=yes, resizable=yes" );
});

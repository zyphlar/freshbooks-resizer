
window.normalWidth = window.outerWidth;
window.normalHeight = window.outerHeight;

window.minWidth = 250;
window.minHeight = 160;

function freshbooksResize(){
  var resizeButton = document.getElementById("freshbooks-resize-button");

  if(window.outerHeight == window.normalHeight){
    window.resizeTo(window.minWidth,window.minHeight);
    resizeButton.innerHTML = "&#x25B2;";
  }
  else{
    window.resizeTo(window.normalWidth,window.normalHeight);
    resizeButton.innerHTML = "&#x25BC;";
  }
}

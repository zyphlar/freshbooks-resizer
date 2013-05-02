function injectJs(link) {
var scr = document.createElement('script');
scr.type="text/javascript";
scr.src=link;
document.getElementsByTagName('head')[0].appendChild(scr)
//document.body.appendChild(scr);
}

injectJs(chrome.extension.getURL('injected.js'));

function insertFreshbooksResizer() {
  var bodyTag = document.getElementsByTagName('body')[0];
  var resizerDiv = document.createElement('div');

  resizerDiv.setAttribute('id',"freshbooks-resizer");
  resizerDiv.setAttribute('style',"position:absolute;top: 0;right: 0;z-index:  1000;font-size: 16px;color:  white;border: 1px solid white;line-height: 1em;");
  resizerDiv.innerHTML = '<span id="freshbooks-resize-button" style="cursor:pointer" onclick="freshbooksResize()">&#x25BC</span>';

  bodyTag.appendChild(resizerDiv);
}

insertFreshbooksResizer();
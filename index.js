/* README:
  - jsdom doesn't render images without canvas or canvas-prebuilt
  - canvas requires Cairo to be installed
  - didn't proceed any further
*/

const fs = require('fs');
const canvas = require('canvas');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

var htmlSource = fs.readFileSync('example/in.html', 'utf8');
var dom = new JSDOM(htmlSource, {resources: 'usable'});

var document = dom.window.document;
var imgs = document.querySelectorAll('img');
var blankCanvas = document.createElement('canvas');

var maxSize = 20;

dom.window.onload = function() {
  // May need to move the imgs.forEach into here.
}
imgs.forEach(function (img) {
  var src = img.src;
  console.log(src + ': ' + img.width + 'x' + img.height);
  /* README:
    - current issue: img isn't loaded without canvas library.
    - once that's resolved:
      1. Scale the canvas down, draw onto it, get result as data-uri.
      2. Replace img.src with the data-uri, and add src as 'data-imgPreloaderSrc'.
      3. Add a listener for when the element is "visible", to replace src.
  */
});

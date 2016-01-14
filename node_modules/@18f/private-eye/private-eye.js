(function() {
  'use strict';

  var PrivateEye = function(opts) {
    var styles = document.createElement('style');
    styles.innerHTML = 'a.private-link::after { content: "\\1F512"; font-size: 0.75em; vertical-align: top; }';
    document.body.appendChild(styles);

    opts.ignoreUrls.forEach(function(url) {
      var anchors = document.querySelectorAll('a[href*="' + url + '"]');
      Array.prototype.forEach.call(anchors, function(anchor) {
        anchor.className += ' private-link';
        anchor.title = "This is a link to a private site, which may or may not be accessible to you.";
      });
    });
  };

  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = PrivateEye;
  } else {
    window.PrivateEye = PrivateEye;
  }
})();

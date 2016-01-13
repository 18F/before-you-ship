/*
  Usage:

      PrivateEye({
        ignoreUrls: [
          'http://so.me/private/url',
          'anoth.er',
          ...
        ]
      })

  where the `ignoreUrls` are substrings that match links on the pag. Requires IE 9+.
 */
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

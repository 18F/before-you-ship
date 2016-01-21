(function() {
  // https://github.com/18F/private-eye#usage
  PrivateEye({
    // keep in sync with the BASE_PROOFER_OPTS in the `go` script
    ignoreUrls: [
      'https://github.com/18F/Accessibility_Reviews',
      'https://github.com/18F/DevOps',
      'https://github.com/18F/handbook',
      'https://github.com/18F/writing-lab'
    ]
  });

  var isTouchScreen = function() {
    // https://github.com/Modernizr/Modernizr/blob/da22eb27631fc4957f67607fe6042e85c0a84656/feature-detects/touchevents.js#L40
    return ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;
  };

  // http://bryanbraun.github.io/anchorjs/
  if (isTouchScreen()) {
    anchors.options = {
      visible: 'always'
    };
  }
  anchors.add('h3,h4,h5');
})();

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

// http://bryanbraun.github.io/anchorjs/
anchors.add('h3,h4,h5');

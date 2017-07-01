// Toggle aria- expanded & hidden roles.
var a11yRoleExpanded = function(targetElm, clickElm) {
  if (targetElm.classList.contains('js--hidden')) {
    clickElm.setAttribute('aria-expanded', 'false');
    targetElm.setAttribute('aria-hidden', 'true');
  } else {
    clickElm.setAttribute('aria-expanded', 'true');
    targetElm.setAttribute('aria-hidden', 'false');
  }
};

// Toggle Hidden Element.
var toggleElemnts = function(toggleElm) {
  toggleElm.classList.toggle('js--hidden');
};

// Element Focus.
var focusElem = function(focusElm) {
  focusElm.focus();
};

// Toggle Video state.
var toggleVideoActions = function() {
  this.paused ? this.play() : this.pause();
};

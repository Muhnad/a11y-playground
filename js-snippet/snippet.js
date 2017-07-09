// Add Element role.
var addRole = function(element, role, roleVal) {
  return element.setAttribute(role, roleVal);
};

// Toggle aria-expanded & hidden roles.
var a11yRoleExpanded = function(targetElm, clickElm) {
  if (targetElm.classList.contains('js--hidden')) {
    addRole(clickElm, 'aria-expanded', 'false');
    addRole(targetElm, 'aria-hidden', 'true');
  } else {
    addRole(clickElm, 'aria-expanded', 'true');
    addRole(targetElm, 'aria-hidden', 'false');
  }
};

// Toggle Hidden Element.
var toggleElemnts = function(toggleElm) {
  toggleElm.classList.toggle('js--hidden');
};

// Toggle Video state.
var toggleVideoActions = function() {
  this.paused ? this.play() : this.pause();
};

// Element Focus.
var focusElem = function(focusElm) {
  focusElm.focus();
};

// Detect RTL paragraphs text words.
var DetectedArParagraphs = (function() {
  var arabicCharacters = /[\u0600-\u06ff]/;
  var paragraphs = [...document.getElementsByTagName('p')];

  const hasArabicWords = function(parg) {
    if (arabicCharacters.test(parg.textContent)) {
      var lang = 'ar';
      var dir = 'rtl';
      addRole(parg, 'lang', lang);
      addRole(parg, 'dir', dir);
    }
  };

  paragraphs.forEach(hasArabicWords);
})();

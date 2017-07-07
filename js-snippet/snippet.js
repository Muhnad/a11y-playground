// Toggle aria-expanded & hidden roles.
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
      parg.setAttribute('lang', lang);
      parg.setAttribute('dir', dir);
    }
  };

  paragraphs.forEach(hasArabicWords);
})();

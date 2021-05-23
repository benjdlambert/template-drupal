(function (Modernizr) {
  Modernizr.addTest('touchevents', function () {
    var bool;

    if ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch) {
      bool = true;
    } else {
      var query = ['@media (', Modernizr._prefixes.join('touch-enabled),('), 'heartz', ')', '{#modernizr{top:9px;position:absolute}}'].join('');
      Modernizr.testStyles(query, function (node) {
        bool = node.offsetTop === 9;
      });
    }

    return bool;
  });
})(Modernizr);

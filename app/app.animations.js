angular.
  module('listCompApp').
  animation('.album', function albumAnimateFactory() {
    return {
      addClass: animateIn,
      removeClass: animateOut
    };

    function animateIn(element, className, done) {
      if (className !== 'selected') return;

      element.
        css({
          display: 'block',
          position: 'absolute',
          top: 250,
         }).
         animate({
           top: 0
         }, done);

       return function animateInEnd(wasCanceled) {
          if (wasCanceled) element.stop();
        };
    }

    function animateOut(element, className, done) {
      if (className !== 'selected') return;

      element.
        css({
          position: 'absolute',
          top: 0
        }).
        animate({
          top: -250
        }, done;);

      return function animateOutEnd(wasCanceled) {
        if (wasCanceled) element.stop();
      };
    }
  });

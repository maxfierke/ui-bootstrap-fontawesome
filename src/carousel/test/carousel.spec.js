describe('carousel', function() {
  beforeEach(module('ui.bootstrap.carousel', function($compileProvider, $provide) {
    angular.forEach(['ngSwipeLeft', 'ngSwipeRight'], makeMock);
    function makeMock(name) {
      $provide.value(name + 'Directive', []); //remove existing directive if it exists
      $compileProvider.directive(name, function() {
        return function(scope, element, attr) {
          element.on(name, function() {
            scope.$apply(attr[name]);
          });
        };
      });
    }
  }));
  beforeEach(module('uib/template/carousel/carousel.html', 'uib/template/carousel/slide.html'));

  var $rootScope, $compile;
  beforeEach(inject(function(_$rootScope_, _$compile_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
  }));

  describe('basics', function() {
    var elm, scope;
    beforeEach(function() {
      scope = $rootScope.$new();
      scope.slides = [
        {active:false,content:'one'},
        {active:false,content:'two'},
        {active:false,content:'three'}
      ];
      elm = $compile(
        '<uib-carousel interval="interval" no-transition="true" no-pause="nopause">' +
          '<uib-slide ng-repeat="slide in slides" active="slide.active">' +
            '{{slide.content}}' +
          '</uib-slide>' +
        '</uib-carousel>'
      )(scope);
      scope.interval = 5000;
      scope.nopause = undefined;
      scope.$apply();
    });

    it('has Font-Awesome icon classes for navigation arrows', function () {
      expect(elm.find('.left.carousel-control > .fa.fa-chevron-left').length).toBe(1);
      expect(elm.find('.right.carousel-control > .fa.fa-chevron-right').length).toBe(1);
    });
  });
});

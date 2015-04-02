describe('rating directive', function () {
  var $rootScope, $compile, element;
  beforeEach(module('ui.bootstrap.rating'));
  beforeEach(module('template/rating/rating.html'));
  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $rootScope.rate = 3;
    element = $compile('<rating ng-model="rate"></rating>')($rootScope);
    $rootScope.$digest();
  }));

  it('should use the Font-Awesome star icons', function () {
    expect(element.find('.fa.fa-star').length).toBe(3);
    expect(element.find('.fa.fa-star-o').length).toBe(2);
  });
});

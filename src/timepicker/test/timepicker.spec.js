describe('timepicker directive', function () {
  var $rootScope, $compile, element;

  beforeEach(module('ui.bootstrap.timepicker'));
  beforeEach(module('template/timepicker/timepicker.html'));
  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $rootScope.time = newTime(14, 40);

    element = $compile('<timepicker ng-model="time"></timepicker>')($rootScope);
    $rootScope.$digest();
  }));

  function newTime(hours, minutes) {
    var time = new Date();
    time.setHours(hours);
    time.setMinutes(minutes);
    return time;
  }

  it('uses Font-Awesome icon classes', function () {
    expect(element.find('tr > td > .btn > .fa.fa-chevron-up').length).toBe(2);
    expect(element.find('tr > td > .btn > .fa.fa-chevron-down').length).toBe(2);
  });
});


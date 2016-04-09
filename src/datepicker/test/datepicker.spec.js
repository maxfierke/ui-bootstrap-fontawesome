describe('datepicker directive', function () {
  var $rootScope, $compile, element;
  beforeEach(module('ui.bootstrap.datepicker'));
  beforeEach(module('uib/template/datepicker/datepicker.html'));
  beforeEach(module('uib/template/datepicker/day.html'));
  beforeEach(module('uib/template/datepicker/month.html'));
  beforeEach(module('uib/template/datepicker/year.html'));
  beforeEach(module('uib/template/datepicker/popup.html'));
  beforeEach(module(function($compileProvider) {
    $compileProvider.directive('dateModel', function() {
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, modelController) {
          modelController.$formatters.push(function(object) {
            return new Date(object.date);
          });

          modelController.$parsers.push(function(date) {
            return {
              type: 'date',
              date: date.toUTCString()
            };
          });
        }
      };
    });
  }));
  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  describe('with empty initial state', function () {
    beforeEach(inject(function() {
      $rootScope.date = null;
      element = $compile('<uib-datepicker ng-model="date"></uib-datepicker>')($rootScope);
      $rootScope.$digest();
    }));

    it('has Font-Awesome next and previous icons', function () {
      expect(element.find('thead').find('.fa.fa-chevron-left').length).toBe(1);
      expect(element.find('thead').find('.fa.fa-chevron-right').length).toBe(1);
    });
  });
});

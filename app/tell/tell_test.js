'use strict';

describe('myApp.ask module', function() {

  beforeEach(module('myApp.tell'));

  describe('ask controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var tellCtrl = $controller('TellCtrl');
      expect(tellCtrl).toBeDefined();
    }));

  });
});
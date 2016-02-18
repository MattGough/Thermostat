"use strict";

describe('Thermostat', function() {
  var thermostat;

  beforeEach( function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe('#up', function(){
   it('increase temperature by one degree', function() {
     thermostat.increaseTemperature();
     expect(thermostat.getCurrentTemperature()).toEqual(21);
   });
 });
});

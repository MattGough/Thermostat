"use strict";

describe('Thermostat', function() {
  var thermostat;

  beforeEach( function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe('#increaseTemperature', function(){
   it('increase temperature by one degree', function() {
     thermostat.increaseTemperature();
     expect(thermostat.getCurrentTemperature()).toEqual(21);
   });
 });

 describe('#decreaseTemperature', function(){
  it('decreases temperature by one degree', function() {
    thermostat.decreaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });
 });
  it('has a minimum temperature of 10 degrees', function(){
    for (var i = 0; i < 15; i++) {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
});

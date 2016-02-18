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

  it('has power saving mode on by default', function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch power saving mode off', function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch PSM back on', function() {
  thermostat.switchPowerSavingModeOff();
  expect(thermostat.isPowerSavingModeOn()).toBe(false);
  thermostat.switchPowerSavingModeOn();
  expect(thermostat.isPowerSavingModeOn()).toBe(true);
});

 describe('when power saving mode on', function() {
  it('has max temp of 25 degrees ', function(){
    for (var i = 0; i < 15; i++) {
      thermostat.increaseTemperature();
    }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
  });
});
 describe('when power saving mode off', function() {
  it('has max temp of 32 degrees', function(){
    thermostat.switchPowerSavingModeOff();
    for (var i = 0; i < 15; i++) {
      thermostat.increaseTemperature();
    }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
  });
 });
});

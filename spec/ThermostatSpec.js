"use strict";

describe('Thermostat', function() {
  var thermostat;

  beforeEach, function() {
    var thermostat = new Thermostat;
  }

  it('starts at 20 degrees', function() {
    var thermostat = new Thermostat;
    expect(thermostat.getCurrentTemperature()).toEqual(20);

  });
});

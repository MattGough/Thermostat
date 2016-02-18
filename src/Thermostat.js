"use strict";

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE_ON = 25;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MAX_LIMIT_PSM_ON = 25;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.increaseTemperature = function() {
  if  (this.isMaximumTemperature()) {
    return;
  }
  else {
  this.temperature += 1
  }
}

Thermostat.prototype.decreaseTemperature = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
}

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
}

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === false) {
  return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  return this.powerSavingMode = false;
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  return this.powerSavingMode = true;
}


Thermostat.prototype.powerSavingOn = function() {
  return this.temperature === this.MAXIMUM_TEMPERATURE_ON;
}

Thermostat.prototype.powerSavingOff = function() {
  return this.temperature === this.MAXIMUM_TEMPERATURE_OFF;
}

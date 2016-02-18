"use strict";

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE_ON = 25;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MAX_LIMIT_PSM_ON = 25;
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.increaseTemperature = function() {
  if  (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1
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

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
}

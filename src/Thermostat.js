'use strict'

class Thermostat {
  constructor() {
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
  this.HIGH_ENERGY_USAGE_LIMIT = 25;
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSave = true;
  this.MAX_LIMIT_PS_ON = 25;
  this.MAX_LIMIT_PS_OFF = 32;
  }
  

  tempDisplay() {
  return this.temperature;
  }

  increaseTemp() {
    if (this.isMaximumTemperature()) {
      return;
    }
  this.temperature += 1  
  }

  decreaseTemp() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1
  }

  isPowerSaveOn() {
    return this.powerSave === true;
  }

  isPowerSaveOff() {
    return this.powerSave === false;
  }

  isMaximumTemperature() {
    if (this.isPowerSaveOn() === false) {
      return this.temperature === this.MAX_LIMIT_PS_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PS_ON;
  }

  switchPowerSaveOn() {
    this.powerSave = true
  }

  switchPowerSaveOff() {
    this.powerSave = false
  }

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  resetTemp() {
    this.temperature = this.DEFAULT_TEMPERATURE;   
  }

  energyUsage() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'low-usage';
    }
    if (this.temperature <= this.HIGH_ENERGY_USAGE_LIMIT) {
      return 'medium-usage';
    }
    return 'high-usage';
  }
};
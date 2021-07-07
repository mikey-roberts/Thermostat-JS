'use strict'

class Thermostat {
  constructor() {
  this.temperature = 20;
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
    this.temperature = 20    
  }
};
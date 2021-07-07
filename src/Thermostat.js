'use strict'

class Thermostat {
  constructor() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  }

  tempDisplay() {
  return this.temperature;
  }

  increaseTemp() {
  this.temperature += 1  
  }

  decreaseTemp() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1
  }

  isPowerSaveOn() {
  true
  }

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }
};
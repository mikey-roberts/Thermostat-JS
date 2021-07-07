'use strict'

class Thermostat {
  constructor() {
  this.temperature = 20;
  }

  tempDisplay() {
  return this.temperature;
  }

  increaseTemp() {
  this.temperature += 1  
  }

  decreaseTemp() {
  this.temperature -= 1
  }
};
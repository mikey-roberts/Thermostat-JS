'use strict'


describe("Thermostat", () => {
  let thermostat;

  beforeEach(function() {
   thermostat = new Thermostat();   
  });
  it("should have a default temperature", () => {
    expect(thermostat.temperature).toEqual(20);
  });
  it("temperature can be increased", () => {
    thermostat.increaseTemp();
    expect(thermostat.temperature).toEqual(21);
  });
  it("temperature can be decreased", function() {
    thermostat.decreaseTemp
    expect(thermostat.tempDisplay).toEqual(19);
  });
  it("goes to a maximum of 25 degrees if power saving mode is on", function() {
    for (let i = 0; i < 11; i++) {
    thermostat.increaseTemp()   
    }
    expect(thermostat.tempDisplay).toEqual(30);
    thermostat.PowerSaveOn
    expect(thermostat.tempDisplay).toEqual(25);
  });
  it("goes to a maximum of 32 degrees if power saving mode is off", function() {
    expect(thermostat.tempDisplay).toEqual(20);
    thermostat.PowerSaveOff
    for (let i = 0; i < 13; i++) {
      thermostat.increaseTemp()   
      }    
    expect(thermostat.tempDisplay).toEqual(32);
  });
  it("minimum temperature cannot go below 10", function() {
    for (let i = 0; i < 13; i++) {
      thermostat.decreaseTemp()   
      }    
    expect(thermostat.tempDisplay).toEqual(10);
    (1).times.thermostat.decreaseTemp
    expect(thermostat.tempDisplay).toThrow('Cannot go below 10 degrees')
    expect(thermostat.tempDisplay).toEqual(10);
  })


});
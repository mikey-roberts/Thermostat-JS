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
  it("temperature can be decreased", () => {
    thermostat.decreaseTemp();
    expect(thermostat.tempDisplay()).toEqual(19);
  });
  it("minimum temperature cannot go below 10", () => {
    for (let i = 0; i < 11; i++) {
      thermostat.decreaseTemp();  
      }    
    expect(thermostat.tempDisplay()).toEqual(10);
  })
  it("power saver mode should be on by default", () => {
    expect(thermostat.isPowerSaveOn()).toBe(true);
  })
  it('can switch power save off', () => {
    thermostat.switchPowerSaveOff();
    expect(thermostat.isPowerSaveOn()).toBe(false);
  })
  it('can switch power save back on', () => {
    thermostat.switchPowerSaveOff();
    expect(thermostat.isPowerSaveOn()).toBe(false);
    thermostat.switchPowerSaveOn();
    expect(thermostat.isPowerSaveOn()).toBe(true);
  })
  describe('when power saving mode is on', () => {
    it('has a maximum temperature of 25 degrees', () => {
      for (let i = 0; i < 6; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.tempDisplay()).toEqual(25);
    });
  });
  describe('when power saving mode is off', () => {
    it('has a maximum temperature of 32 degrees', () => {
      thermostat.switchPowerSaveOff();
      for (let i = 0; i < 13; i++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.tempDisplay()).toEqual(32);
    });
  });
  it('can be reset to the default temperature', () => {
    for (let i = 0; i < 6; i++) {
      thermostat.increaseTemp();
    }
    thermostat.resetTemp();
    expect(thermostat.tempDisplay()).toEqual(20);
  });
  describe('displaying usage levels', () => {
    describe('when the temperature is below 18 degrees', () => {
      it('it is considered low-usage', () => {
        for (let i = 0; i < 3; i++) {
          thermostat.decreaseTemp();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });
  
    describe('when the temperature is between 18 and 25 degrees', () => {
      it('it is considered medium-usage', () => {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });
  
    describe('when the temperature is anything else', () => {
      it('it is considered high-usage', () => {
        thermostat.powerSave = false;
        for (let i = 0; i < 6; i++) {
          thermostat.increaseTemp();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });
});
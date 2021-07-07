describe("Thermostat", function() {
  var thermostat;
  beforeEach(function() {
   thermostat = new Thermostat();   
  });
  it("should have a default temperature", function() {
    expect(thermostat.tempDisplay).toEqual(20);
  });
  it("temperature can be increased", function() {
    expect(thermostat.increaseTemp).toEqual(21);
  });
  it("temperature can be decreased", function() {
    expect(thermostat.decreaseTemp).toEqual(19);
  });
  it("goes to a maximum of 25 degrees if power saving mode is on", function() {
    (10).times.thermostat.increaseTemp    
    expect(thermostat.tempDisplay).toEqual(30);
    thermostat.isPowerSaveOn
    expect(thermostat.tempDisplay).toEqual(25);
  });
  it("goes to a maximum of 32 degrees if power saving mode is off", function() {
    expect(thermostat.tempDisplay).toEqual(20);
    (15).times.thermostat.increaseTemp    
    thermostat.isPowerSaveOn 
    expect(thermostat.tempDisplay).toEqual(25);
  });
  it("minimum temperature cannot go below 10", function() {
    (10).times.thermostat.decreaseTemp
    expect(thermostat.tempDisplay).toEqual(10);
    (1).times.thermostat.decreaseTemp
    expect(thermostat.tempDisplay).toThrow('Cannot go below 10 degrees')
    expect(thermostat.tempDisplay).toEqual(10);
  })
});
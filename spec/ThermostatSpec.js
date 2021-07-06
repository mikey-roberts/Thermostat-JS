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
  
});
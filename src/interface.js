document.addEventListener("DOMContentLoaded", () => {
  const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.temperature;
    document.querySelector('#temperature').className = thermostat.energyUsage();
  }
    const thermostat = new Thermostat();
    updateTemperature();
    document.querySelector('#temperature-up').addEventListener('click', () => {
      thermostat.increaseTemp();
      updateTemperature();
    });
    document.querySelector('#temperature-down').addEventListener('click', () => {
      thermostat.decreaseTemp();
      updateTemperature();
    });
    document.querySelector('#temperature-reset').addEventListener('click', () => {
      thermostat.resetTemp();
      updateTemperature();
    });
    document.querySelector('#powersave-on').addEventListener('click', () => {
      thermostat.switchPowerSaveOn();
      document.querySelector('#power-saving-status').innerText = 'on';
      updateTemperature();
    })
    document.querySelector('#powersave-off').addEventListener('click', () => {
      thermostat.switchPowerSaveOff();
      document.querySelector('#power-saving-status').innerText = 'off';
      updateTemperature();
    })
  });
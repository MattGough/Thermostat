$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#Increase_temp').click(function() {
   thermostat.increaseTemperature();
   updateTemperature();
  });

  $('#Decrease_temp').click(function() {
   thermostat.decreaseTemperature();
   updateTemperature();
  });

  $('#Reset_Temp').click(function() {
   thermostat.resetTemperature();
   updateTemperature();
  });

  $('#PSM_ON').click(function() {
   thermostat.switchPowerSavingModeOn();
   $('#power-saving-status').text('on');
  });

  $('#PSM_OFF').click(function() {
   thermostat.switchPowerSavingModeOff();
   $('#power-saving-status').text('off');
  });

  function updateTemperature(){
   $('#temperature').text(thermostat.temperature);
   $('#temperature').attr('class', thermostat.displayColour());
  }

});

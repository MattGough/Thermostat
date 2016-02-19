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
   $('#power-saving-status').text('ON');
  });

  $('#PSM_OFF').click(function() {
   thermostat.switchPowerSavingModeOff();
   $('#power-saving-status').text('OFF');
  });

  $('#select-city').submit(function(event) {
   event.preventDefault();
   var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=44db6a862fba0b067b1930da0d769e98&units=metric&mode=html', function(data) {
     $('#current-info').html(data);
    });
  });

  function updateTemperature(){
   $('#temperature').text( thermostat.temperature);
   $('#temperature').attr('class', thermostat.displayColour());
  }
});

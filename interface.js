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
   $('#temperature').text( thermostat.temperature);
   $('#temperature').attr('class', thermostat.displayColour());
  }

  $('#current-city').change(function() {
    var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=44db6a862fba0b067b1930da0d769e98&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
  })
 })

});

// function displayWeather(city) {
// var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
// var token = '&appid=44db6a862fba0b067b1930da0d769e98';
// var units = '&units=metric';
// $.get(url + token + units, function(data) {
//   $('#current-temperature').text(data.main.temp);
// })
//
// displayWeather('London');
//
// $('#select-city').submit(function(event) {
//  event.preventDefault();
//  var city = $('#current-city').val();
//  displayWeather(city);
// })

$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

$('#Increase-temperature').click(function() {
  thermostat.increaseTemperature();
  $('#temperature').text(thermostat.temperature);
 });
});

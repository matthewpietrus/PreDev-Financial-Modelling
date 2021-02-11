var slidertdc = document.getElementById("totaldevcost");
var outputtdc = document.getElementById("tdc");
outputtdc.innerHTML = slidertdc.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slidertdc.oninput = function() {
  outputtdc.innerHTML = this.value;
}
var sliderequity = document.getElementById("equity");
var outputequity = document.getElementById("invest");
outputequity.innerHTML = sliderequity.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
sliderequity.oninput = function() {
  outputequity.innerHTML = this.value;
}
var sliderdebt = document.getElementById("debt");
var outputdebt = document.getElementById("owed");
outputdebt.innerHTML = sliderdebt.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
sliderdebt.oninput = function() {
  outputdebt.innerHTML = this.value;
}

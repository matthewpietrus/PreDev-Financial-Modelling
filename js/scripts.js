// input type = number control for input to make it a number. Maybe get rid of first bar and replace with input. 

var slidertdc = document.getElementById("totaldevcost");
var sliderequity = document.getElementById("equity");

var outputtdc = document.getElementById("tdc");
var outputequity = document.getElementById("invest");
var outputdebt = document.getElementById("owed");

outputtdc.innerHTML = slidertdc.value; // Display the default slider value
outputequity.innerHTML = sliderequity.value; // Display the default slider value
outputdebt.innerHTML=Math.round((slidertdc.value-sliderequity.value)*10)/10; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slidertdc.oninput = function() {
//   outputtdc.innerHTML = this.value;
//   sliderequity.max=this.value
//   sliderdebt.max=this.value
// }
//
// // Update the current slider value (each time you drag the slider handle)
// sliderequity.oninput = function() {
//   outputequity.innerHTML = this.value;
// }
//
// // Update the current slider value (each time you drag the slider handle)
// sliderdebt.oninput = function() {
//   outputdebt.innerHTML = this.value;
// }

// Update the current slider value (each time you drag the slider handle)
var updatevalues=function() {
  outputtdc.innerHTML = slidertdc.value;
  outputequity.innerHTML = sliderequity.value;
  sliderequity.max=slidertdc.value;
  outputdebt.innerHTML=Math.round((slidertdc.value-sliderequity.value)*10)/10
}

slidertdc.oninput = updatevalues
sliderequity.oninput = updatevalues

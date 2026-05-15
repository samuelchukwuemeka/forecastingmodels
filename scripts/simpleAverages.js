// Copyright 2018 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemeka-samuel.appspot.com
// www.forecastingmodels.appspot.com

"use strict";

//Resize the textarea
$('textarea').on('input', function() {
  $(this).outerHeight(75).outerHeight(this.scrollHeight);
});


document.getElementById("formMeanAbsoluteDeviation").addEventListener("submit", formMeanAbsoluteDeviation);

function formMeanAbsoluteDeviation(event) {
    event.preventDefault();

    var actualMAD = document.getElementById('actualMAD').value,
        forecastMAD = document.getElementById('forecastMAD').value,
        actual = actualMAD.split('\n'),
        forecast = forecastMAD.split('\n'),
        sampleSizeActual = actual.length,
        sampleSizeForecast = forecast.length,
        errorMAD = [],
        absoluteValueErrorMAD = [],
        sumAbsoluteValueErrorMAD = 0,
        numberForecastMAD,
        valueMAD;
        
        
        if (sampleSizeActual !== sampleSizeForecast){
            alert("Please make sure the two sample sizes are equal. Set the first value of the Forecast to be the first value of the Actual.");
        }
        
        for (var i=0; i < sampleSizeActual, i < sampleSizeForecast; i++){
            errorMAD[i] = actual[i] - forecast[i];
            absoluteValueErrorMAD[i] = Math.abs(errorMAD[i]);
            sumAbsoluteValueErrorMAD += parseFloat(absoluteValueErrorMAD[i]);
        }
        
        numberForecastMAD = sampleSizeForecast - 1;
        
        valueMAD = sumAbsoluteValueErrorMAD / numberForecastMAD;
                
           
    document.getElementById("errorMAD").value = errorMAD;
    document.getElementById("absoluteValueErrorMAD").value = absoluteValueErrorMAD;
    document.getElementById("sumAbsoluteValueErrorMAD").value = sumAbsoluteValueErrorMAD;
    document.getElementById("numberForecastMAD").value = numberForecastMAD;
    document.getElementById("valueMAD").value = valueMAD; 
}





  
        





       




       
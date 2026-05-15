// Copyright 2018 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemeka-samuel.appspot.com
// www.forecastingmodels.appspot.com

"use strict";

//Resize the textarea
$('textarea').on('input', function() {
  $(this).outerHeight(75).outerHeight(this.scrollHeight);
});


document.getElementById("formMeanSquareError").addEventListener("submit", formMeanSquareError);

function formMeanSquareError(event) {
    event.preventDefault();

    var actualMSE = document.getElementById('actualMSE').value,
        forecastMSE = document.getElementById('forecastMSE').value,
        actual = actualMSE.split('\n'),
        forecast = forecastMSE.split('\n'),
        sampleSizeActual = actual.length,
        sampleSizeForecast = forecast.length,
        errorMSE = [],
        squareErrorMSE = [],
        sumSquareErrorMSE = 0,
        numberForecastMSE,
        valueMSE;
        
        
        if (sampleSizeActual !== sampleSizeForecast){
            alert("Please make sure the two sample sizes are equal. Set the first value of the Forecast to be the first value of the Actual.");
        }
        
        for (var i=0; i < sampleSizeActual, i < sampleSizeForecast; i++){
            errorMSE[i] = actual[i] - forecast[i];
            squareErrorMSE[i] = Math.pow(errorMSE[i], 2);
            sumSquareErrorMSE += parseFloat(squareErrorMSE[i]);
        }
        
        numberForecastMSE = sampleSizeForecast - 1;
        
        valueMSE = sumSquareErrorMSE / numberForecastMSE;
                
           
    document.getElementById("errorMSE").value = errorMSE;
    document.getElementById("squareErrorMSE").value = squareErrorMSE;
    document.getElementById("sumSquareErrorMSE").value = sumSquareErrorMSE;
    document.getElementById("numberForecastMSE").value = numberForecastMSE;
    document.getElementById("valueMSE").value = valueMSE; 
}





  
        





       




       
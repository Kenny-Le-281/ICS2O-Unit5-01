// Created by: Kenny Le
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-01-HTML/sw.js", {
    scope: "/ICS2O-Unit5-01-HTML/",
  })
}

'use strict'


function convert () {
  // input
  var slider-value = parseFloat(document.getElementById('slider').value)
  var random-number = Math.floor(Math.random() * 6) + 1;
  
  // process
  var random-number = Math.floor(Math.random() * 6) + 1;
  if (slider-value == random-number) {
    document.getElementById("check").innerHTML = "You are correct"
  }

  if (slider-value != random-number) {
    document.getElementById("check").innerHTML = "You are incorrect"
  }
}

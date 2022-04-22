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

;("use strict")

/**
 * This function generates a random number between 1-6.
 */
document.getElementById("slider-value").innerHTML =
  Math.floor(Math.random() * 6) + 1

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  document.getElementById("slider-value").innerHTML = "<p>Hello, World!</p>"
}

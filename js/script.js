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

var random-number = Math.floor(Math.random() * 6) + 1

document.getElementByID(slider-value).onclick = myButtonClicked () {

// number guessed by user
var user-number = document.getElementById("slider").value;

if (user-number == random-number) 
{
  print = "You are correct";
}

if (user-number != random-number) 
{
  print = "You are incorrect"
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  document.getElementById("slider").innerHTML
}

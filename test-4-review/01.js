"use strict";

/* Question 01

Implement a function which can run a given function after a delay.

Arguments:
 - callback: the function to execute after the delay
 - delay: number of milliseconds to wait
 - data: the one (and only) argument to pass to the callback
*/


const doShortly = function(callback, delay, data) {
  // IMPLEMENT ME

  // wait a specified amount of time (delay)
  const performAction = () => {
    // after the delay, we call the callback with the data variable
    callback(data);
  };

  setTimeout(performAction, delay);

};


// Don't change below:
module.exports = { doShortly };

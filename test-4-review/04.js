"use strict";

/* Question 04

Write a function which creates and returns a promise.

Its job will be similar to that of Question 01:
> Run a given (callback) function after a delay.

However:
- if the given callback returns a falsy value, the promise should fail (reject)
  the string "Falsy value retrieved" should be sent through to the reject function
- if the given callback returns a truthy value, the promise should pass (resolve)
  the return value of the executed callback should be sent through to the resolve function

*/

const doShortlyExpectingTruthy = function(callback, delay, data) {
  // IMPLEMENT ME

  // return a Promise
  const myPromise = new Promise((resolve, reject) => {
    // wait a specified amount of time
    setTimeout(() => {
      // call the callback with the provided data; and capture the return value
      const returnVal = callback(data);

      // if the return value is falsey, reject with "Falsy value retrieved"
      if (!returnVal) {
        return reject("Falsy value retrieved");
      }

      // if the reutrn value is truthy, resolve with the return value
      resolve(returnVal);
    }, delay);
  });

  return myPromise;
};


// Don't change below:
module.exports = { doShortlyExpectingTruthy };

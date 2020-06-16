isCordova = true;

// exports is used to export downloaded/online-only JS-content
window.exports = window.exports || {};

// deviceready is triggered by cordova when it's loaded
deviceReady$ = new Promise((resolve) => document.addEventListener('deviceready', resolve));

window.addEventListener('DOMContentLoaded', () => {

  //check mobile device type
  var isiOS = /(ipod|iphone|ipad)/i.test(navigator.userAgent);
  var isAndroid = /(android)/i.test(navigator.userAgent);
  loadScript('cordova/android/cordova.js');

});
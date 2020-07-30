exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof bluetoothSerial === 'undefined') {
      return cb(false)
    }

    // pass through the sms object
    Vue.cordova.bluetoothSerial = bluetoothSerial

    return cb(true)

  }, false)
}

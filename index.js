(function () {
  // We do not anything if its already cordova
  if (window.cordova) {
    return
  }

  if (window.navigator.notification) {
    return
  }

  window.navigator.notification = {
    alert: function(message, callback) {
      callback(window.alert(message))
    },
    confirm: function (message, callback) {
      callback(window.confirm(message))
    },
    prompt: function (message, callback) {
      callback(window.prompt(message))
    },
    beep: function (times) {
      // there is no equivalent function in the browser
    }
  }
})()

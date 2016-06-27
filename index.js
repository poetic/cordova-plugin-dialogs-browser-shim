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
      callback && callback(window.alert(message))
    },
    confirm: function (message, callback) {
      callback && callback(window.confirm(message) ? 1 : 2)
    },
    prompt: function (message, callback) {
      callback && callback(window.prompt(message))
    },
    beep: function (times) {
      // there is no equivalent function in the browser
    }
  }
})()

function hidenosearch() {
  document.getElementById("searchterm").hidden = true
}
var down = false
if (down) {
  window.location.replace("https://aragon-press.com/nope/")
}
//Define QueryTools (modified)
var qt = {
  mod: function(id, to) {
    document.getElementById(id).innerHTML = to
  },
  ask: function(query) {
    let askresponse = prompt(query)
    return askresponse
  },
  say: function(msg) {
    alert(msg)
  },
  log: function(msg) {
    console.log(msg)
    return "undefined"
  },
  link: function(site) {
    window.location.href = site
  },
  redir: function(site) {
    window.location.replace(site)
  },
  params: function() {
    let parameters = new URLSearchParams(location.search)
    let editedparams = decodeURIComponent(parameters)
    delete parameters
    let params = editedparams
    return params
  },
  if: function(statementToCheck, toRunIfTruthy, toRunIfFalsy) {
    if (statementToCheck) {
      return true
      eval(toRunIfTruthy)
    } else if (statementToCheck == false) {
      return false
      eval(toRunIfFalsy)
    } else {
      return "QT-Error: returned neither true nor false"
      console.log("QueryTools ran into an error, and this site might not work correctly. We recommend contacting the developer and telling them that QueryTools found an invalid qt.if statement.")
    }
  }
}

////////////////////////////////////////////////////////////////////////////////////////////
function authuser() {
  if (document.cookie.includes("signedin=true") == false) {
    var user = qt.ask("username:")
    var userok = prompt("Continue as " + user + "? Type true or false")
    if (userok.toString() == "true") {
      document.cookie = "signedin=true"
      localStorage.setItem("username", user)
      alert("signed in")
    } else {
      delete user
      delete userok
      alert("info deleted")
    }
  }
  const parameters = qt.params()
  var searchterm = parameters.toString().replace("s=", "")
  var search
  if (parameters.replace("s=", "") == "") {search = true} else {search = false}
  if (search) {
    document.getElementById("searchterm").hidden = false
  } else {
    document.getElementById("searchterm").hidden = true
  }

  function hidenosearch() {
    document.getElementById("searchterm").hidden = true
  }
}

console.log("%cBe careful!\n%cDangerous territory below. Never paste or type anything here unless you understand what it will do - it can stop your StoryTime working!","color: red; font-size: 3em;","color: red; font-size: 1em;")
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
  if (document.cookie.toString().includes("signedin=true") == false) {
    var user = qt.ask("username:")
    var userok = confirm("Continue as " + user + "?")
    if (userok == true) {
      document.cookie = "signedin=true"
      localStorage.setItem("username", user)
      localStorage.setItem("session-key",Math.random())
      alert("signed in")
      location.reload()
    } else {
      delete user
      delete userok
      alert("info deleted")
    }
  } else {
    alert("You're already signed in.")
    let signout = confirm("Do you want to sign out?")
    if (signout == true) {
      localStorage.removeItem("username")
      localStorage.removeItem("user-key")
      document.cookie = "signedin=false"
      alert("OK, you're now signed out.")
      location.reload()
    } else {
      alert("OK, sign-out cancelled.")
    }
  }
}
var trueish
/* this bit is for emergencies
do not remove plz */
if (trueish == 'falseish') {
  alert("OH NO")
}

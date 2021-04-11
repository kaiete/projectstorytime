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
    return undefined
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
      eval(toRunIfTruthy)
      return true
    } else if (statementToCheck == false) {
      eval(toRunIfFalsy)
      return false
    } else {
      console.error("QueryTools ran into an error, and this site might not work correctly. We recommend contacting the developer and telling them that QueryTools found an invalid qt.if statement.")
      return "QT-Error: returned neither true nor false"
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
      var params = qt.params()
      if (location.toString().includes("mysignin")) {
        location.href = "https://storytime.k.vu/my/auth"
      }
      location.reload()
    } else {
      delete user
      delete userok
      alert("info deleted")
    }
  } else {
    let signout = confirm("Do you want to sign out?")
    if (signout == true) {
      localStorage.removeItem("username")
      localStorage.removeItem("user-key")
      localStorage.removeItem("favstory")
      localStorage.removeItem("editbutton")
      document.cookie = "signedin=false"
      alert("OK, you're now signed out.")
      location.reload()
    } else {
      alert("OK, sign-out cancelled.")
    }
  }
}
function manauthuser() {
  var ifsure = confirm("Are you sure you want to use manual signin? Do not use this unless you are exactly sure you know what you are doing, it can cause errors if misspelled!")
  if (ifsure) {
    localStorage.setItem("username",prompt("username:"))
    localStorage.setItem("favstory",prompt("favourite story code:\nNOT story name\nFor example, bb1, tmcj, thewatershrew"))
    localStorage.setItem("user-key",prompt("user key:"))
    document.cookie = "signedin=" + confirm("Appear signedin?\nPressing Cancel will render all signedin features unusable.")
  } else {
    alert("cancelled.")
  }
}
// Handling editbutton
if (localStorage.getItem("editbutton") == "true") {
  document.getElementById("editbutton").hidden = false
} else {
  document.getElementById("editbutton").hidden = true
}
/* this bit is for emergencies
do not remove plz */
var trueish
if (trueish == 'falseish') {
  alert("OH NO")
}
console.log("According to JavaScript, Infinity - Infinity = NaN, while NaN is not Infinity - Infinity.")
var status = new XMLHttpRequest()
status.open("GET","https://storytime.k.vu/_info/status")
status.send()
if (status == "true") {
} else {
  window.location.replace("https://aragon-press.com/nope")
}

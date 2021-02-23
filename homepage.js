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
    var userok = prompt("Continue as " + user + "? Type true or false")
    if (userok.toString() == "true") {
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
dragElement(document.getElementById("movable"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
//////////////////////////////////
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
/* this bit is for emergencies
do not remove plz */
if (true == false) {
  alert("OH NO")
}

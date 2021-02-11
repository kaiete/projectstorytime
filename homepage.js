//Change variable if storytime is down/vice versa
const down = false
if (down) {
  window.location.replace("https://aragon-press.com/nope/")
}
//Define QueryTools (modified)
var qt = {
  mod : function(id,to) {
    document.getElementById(id).innerHTML = to
  },
  ask : function(query) {
    let askresponse = prompt(query)
    return askresponse
  },
  say : function(msg) {
    alert(msg)
  },
  log : function(msg) {
    console.log(msg)
  },
  link : function(site) {
    window.location.href=site
  },
  redir : function(site) {
    window.location.replace(site)
  }
}

////////////////////////////////////////////////////////////////////////////////////////////
function authuser() {
var user = prompt("username:") 
var userok = prompt(user,"true/false") 
if (userok == "true") {
document.getElementById("signin").disabled = true
setTimeout('alert("done")',200)
}
if (userok == "false") {
delete user
alert("username removed from client info") 
document.getElementById("signin").disabled = false
}
}
var userok = "false"
const parameters = new URLSearchParams(window.location.search)
var searchterm = parameters.toString().replace("s=","") 
var search
parameters.replace("s=","") == "" ? search = true : search = false
if (search) {
document.getElementById("searchterm").hidden = false
} else {
document.getElementById("searchterm").hidden = true 
}
function hidenosearch() {
  document.getElementById("searchterm").hidden = true
}


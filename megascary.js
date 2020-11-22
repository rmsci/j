var u = document.getElementsByName('UsernameOrEmailAddress')[0].value;
var p = document.getElementsByName('Password')[0].value;

alert(`Hello ${u},\nYour password is:\n${p}`);

document.location.href = "/";

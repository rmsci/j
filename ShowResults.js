// Inject CSS and font into the HEAD portion
/*
<HEAD>
<link rel="stylesheet" href="https://realmadsci.github.io/j/glitch.css">
<link href="https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap" rel="stylesheet">
</HEAD>
*/
function addStyle(url) {
    let styles = "@import url('" + escape(url) + "');";
    let newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,' + styles;
    document.getElementsByTagName("head")[0].appendChild(newSS);
}
addStyle('https://realmadsci.github.io/j/glitch.css');
addStyle('https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap');

// Inject body overlay and text
/*
<div class="realmadoverlay">
    <div class="realmadglitch" data-text="realmadsci">realmadsci</div>
    <div class="realmadglitch" data-text="was">was</div>
    <div class="realmadglitch" data-text="here">here</div>
  </div>
<BODY>
*/
function makeDivWithClass(cls) {
    let d = document.createElement('div');
    d.classList.add(cls);
    return d;
}
function makeGlitchWord(word) {
    let d = makeDivWithClass('realmadglitch');
    d.setAttribute('data-text', word);
    let t = document.createTextNode(word);
    d.appendChild(t);
    return d;
}

let overlay = makeDivWithClass('realmadoverlay');
overlay.style.opacity = 0.8; // Make it darker
let w = ['welcome', 'to', 'CS4310'];
w.forEach(function(word) {
    overlay.appendChild(makeGlitchWord(word));
});

document.body.appendChild(overlay);

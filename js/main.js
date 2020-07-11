const keys = document.querySelectorAll(".key"),
    note = document.querySelector(".nowplaying");
// hints = document.querySelectorAll(".hints");

videoSelector();

function playNoteOnClick(e) {
    console.log(e);
    const dataKey = e.target.getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key="${dataKey}"]`);

    const keyNote = e.target.getAttribute("data-note");

    e.target.classList.add("playing");
    note.innerHTML = keyNote;
    audio.currentTime = 0;
    audio.play();
}

function playNoteOnKeyboard(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
        key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!key) return;

    const keyNote = key.getAttribute("data-note");

    key.classList.add("playing");
    note.innerHTML = keyNote;
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

// function hintsOn(e, index) {
//     e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
// }

// hints.forEach(hintsOn);

function videoSelector() {
    var select = document.getElementById("video");
    select.onchange = () => {
        var vi = document.getElementById("video").value;
        if (vi == 'space') {
            $("#bg-video").html("<video autoplay muted loop " + 'id="bgvid"><source  src="videos/space.mp4" type="video/mp4">');
        }
        if (vi == 'ember') {
            $("#bg-video").html("<video autoplay muted loop " + 'id="bgvid"><source  src="videos/ember.mp4" type="video/mp4">');
            console.log("ember");
        }
        if (vi == 'sea') {
            $("#bg-video").html("<video autoplay muted loop " + 'id="bgvid"><source  src="videos/sea.mp4" type="video/mp4">');
        }
        if (vi == 'rain') {
            $("#bg-video").html("<video autoplay muted loop " + 'id="bgvid"><source  src="videos/rain.mp4" type="video/mp4">');
        }
    }
};

keys.forEach(key => key.addEventListener("transitionend", removeTransition));
keys.forEach(key => key.addEventListener("click", playNoteOnClick));
window.addEventListener("keydown", playNoteOnKeyboard);
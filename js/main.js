const keys = document.querySelectorAll(".key"),
    note = document.querySelector(".nowplaying"),
    hints = document.querySelectorAll(".hints");

videoSelector();
document.querySelector('#hint').addEventListener('click', startHint, true);

function playNoteOnClick(e) {
    const dataKey = e.target.getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key="${dataKey}"]`);

    const keyNote = e.target.getAttribute("data-note");

    e.target.classList.add("playing");
    note.innerHTML = keyNote;
    audio.currentTime = 0;
    audio.play();
}

function playNoteOnKeyboard(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`),
        key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

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
    var select = document.getElementById("video-selection");
    select.onchange = () => {
        var vi = document.getElementById("video-selection").value;
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

// Open hint overlay
function startHint() {
    for (var i = 0; i < hints.length; i++) {
        hints[i].setAttribute("style", " display: block; transition-delay:" + (i + 1) * 50 + "ms;");
    }
    setTimeout(function () {
        endHint();
    }, 3000);
}

// Close hint overlay
function endHint() {
    for (var i = 0; i < hints.length; i++) {
        hints[i].style.display = 'none';
    }
}

keys.forEach(key => key.addEventListener("transitionend", removeTransition));
keys.forEach(key => key.addEventListener("click", playNoteOnClick));
window.addEventListener("keydown", playNoteOnKeyboard);
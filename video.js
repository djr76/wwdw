//jshint esversion:6




var homeVideo = document.getElementById("bVideo");


function playPause(e) {
    var el = document.getElementById("playButton");
    if (homeVideo.paused) {
        homeVideo.play();
        el.className = "";
    } else {

        homeVideo.pause();
        el.className = "playButton";
    }
}
// function openFullscreen() {
//     if (elem.requestFullscreen) {
//       elem.requestFullscreen();
//     } else if (elem.mozRequestFullScreen) { /* Firefox */
//       elem.mozRequestFullScreen();
//     } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
//       elem.webkitRequestFullscreen();
//     } else if (elem.msRequestFullscreen) { /* IE/Edge */
//       elem.msRequestFullscreen();
//     }
//   }

function toggleFullscreen() {
    let elem = document.querySelector("video");
  
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  }



homeVideo.addEventListener("click", playPause, false);
// homeVideo.addEventListener("click", openFullscreen, false);



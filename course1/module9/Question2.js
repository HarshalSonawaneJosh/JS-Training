//Go to youtube. Open any video. Add a button to the page using JS. On click of the button, the video playback speed should change to 10x

<button type="button" onclick="abc()">
  click here
</button>;

function abc() {
  document.getElementsByTagName("video")[0].playbackRate = 10;
}

// OR modified adding event listner
window.addEventListener(
  "keypress,f for fast and s for slow ",
  function (e) {
    if (e.key === "f")
      document.getElementsByTagName("video")[0].playbackRate += 0.1;
    else if (e.key === "s")
      document.getElementsByTagName("video")[0].playbackRate -= 0.1;
  },
  false
);

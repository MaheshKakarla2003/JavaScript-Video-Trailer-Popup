const playBtn = document.querySelector(".btn");
const video = document.querySelector("video");
const closBtn = document.querySelector(".close-icon");
const videoContainer = document.querySelector(".video-container");
playBtn.addEventListener("click", () => {
  videoContainer.classList.remove("active");
});

closBtn.addEventListener("click", () => {
  videoContainer.classList.add("active");
  video.pause();
  video.currentTime = 0;
});

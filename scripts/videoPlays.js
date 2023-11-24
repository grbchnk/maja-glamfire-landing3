const videoWrap = document.querySelector(".video-wrapper")

function playVideo(videoWrap) {
  const video = videoWrap.querySelector("video")

  if (!video) return

  video.play()
}

playVideo(videoWrap)

const videoWrap = document.querySelector(".video-wrapper")

function playVideos(videoWrap) {
  const videos = videoWrap.querySelectorAll("video")

  if (!videos?.length) return

  videos.forEach((item) => {
    item.play()
  })
}

playVideos(videoWrap)

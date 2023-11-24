function apply3DEffect(imgId) {
  let img = document.getElementById(imgId)

  img.addEventListener("mousemove", function (e) {
    let xAxis = -(e.offsetY - img.offsetHeight / 2) / 40
    let yAxis = (e.offsetX - img.offsetWidth / 2) / 40

    img.style.transition = "transform 0.1s ease"
    img.style.transform = `perspective(1000px) rotateX(${xAxis}deg) rotateY(${yAxis}deg)`

    img.style.setProperty("--x", `${e.offsetX}px`)
    img.style.setProperty("--y", `${e.offsetY}px`)
  })

  img.addEventListener("mouseleave", function (e) {
    img.style.transition = "transform 1s ease"
    img.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`
  })
}

apply3DEffect("effect")

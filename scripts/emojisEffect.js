const emojis = [
  "😍",
  "🥰",
  "😘",
  "💖",
  "😻",
  "💋",
  "🍌",
  "🍆",
  "💕",
  "❤️",
  "💚",
  "💛",
  "💜",
  "🧡",
  "💙",
]

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomEmoji() {
  return emojis[getRandomNumberInRange(0, emojis.length - 1)]
}

function getRandomSize() {
  return getRandomNumberInRange(40, 80)
}

function getRandomPosition() {
  return getRandomNumberInRange(0, window.innerWidth)
}

document.getElementById("effect").addEventListener("click", function () {
  const emoji = getRandomEmoji()
  const size = getRandomSize()
  const position = getRandomPosition()

  const span = document.createElement("span")
  span.textContent = emoji
  span.style.fontSize = `${size}px`
  span.style.left = `${position}px`
  span.style.top = `-50px`
  span.className = "falling-emoji"

  document.body.appendChild(span)

  setTimeout(function () {
    span.remove()
  }, 3000)
})

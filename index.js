let playBtn = document.getElementsByClassName('play')
let pauseBtn = document.getElementsByClassName('pause')

let text = document.querySelector('p')

const audio = new Audio('./audio.mp3')

function showImage() {
  document.getElementById('ptb').style.display = 'block'
}

function hideImage() {
  document.getElementById('ptb').style.display = 'none'
}

playBtn[0].addEventListener('click', (e) => {
  showImage()
  audio.play()
  text.innerHTML = 'Audio Playing'
})

pauseBtn[0].addEventListener('click', (e) => {
  hideImage()
  audio.pause()
  text.innerHTML = 'Audio Paused'
})

function random(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

function createBalloon() {
  var b = document.createElement('div');
  b.className = 'balloon-wrapper balloon-wrapper' + random(1, 3);
  b.style.left = random(5, 95) + '%';
  b.innerHTML = '<div class="balloon balloon' + random(1, 6) + '"></div>';
  document.body.appendChild(b);
  b.addEventListener("animationend", deleteBalloon, false);
  setTimeout(createBalloon, 1000);
}

function deleteBalloon(e) {
  var b = this;
  if (['move1', 'move2', 'move3'].indexOf(e.animationName) != -1) {
    setTimeout(function() {
      document.body.removeChild(b);
    }, random(5000, 10000));
  }
}

createBalloon();
var CANVAS_SIZE = 1000;

var ctx = document.getElementById('clockl-canvas').getContext('2d');
ctx.canvas.width = CANVAS_SIZE
ctx.canvas.height = CANVAS_SIZE

function clear() {
  ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

function drawClockHand(position, handLength) {
  var pxHandLen = CANVAS_SIZE/2 * (handLength || 1);
  ctx.beginPath();
  ctx.moveTo(CANVAS_SIZE/2, CANVAS_SIZE/2);
  ctx.lineTo(
    CANVAS_SIZE/2 + pxHandLen * Math.sin(2 * Math.PI * position),
    CANVAS_SIZE/2 - pxHandLen * Math.cos(2 * Math.PI * position)
  );
  ctx.stroke();
}

function drawFrame() {
  clear();

  var d = new Date();
  ctx.beginPath();
  ctx.arc(CANVAS_SIZE/2, CANVAS_SIZE/2, CANVAS_SIZE/2, 0, Math.PI * 2, true);
  ctx.stroke();

  drawClockHand(d.getHours() / 12, 0.7);
  drawClockHand(d.getMinutes() / 60, 0.8);
  drawClockHand(d.getSeconds() / 60, 0.9);
  drawClockHand(d.getMilliseconds() / CANVAS_SIZE, 1);
}

var motion = (function () {
  var i = 0;
  return {
    start: () => {
      i = setInterval(drawFrame, 10);
    },
    stop: () => {
      clearInterval(i);
    }
  }
})();

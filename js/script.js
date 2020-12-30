let myGameCanvas = document.getElementById('myGameCanvas')
let ctx = myGameCanvas.getContext('2d')

ctx.beginPath()
ctx.font = '32pt Calibri';
ctx.fillStyle = 'purple';
ctx.fillText('BreakOut Game', 110, 42);
ctx.closePath()

ctx.beginPath()
ctx.rect(20, 40, 50, 50)
ctx.fillStyle = '#FF0000';
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.arc(240, 160, 20, 0, Math.PI * 2, false)
ctx.fillStyle = 'blue'
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.rect(160, 10, 100, 40)
ctx.strokeStyle = 'green'
ctx.stroke()
ctx.closePath()
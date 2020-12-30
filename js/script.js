let myGameCanvas = document.getElementById('myGameCanvas')
let ctx = myGameCanvas.getContext('2d')

let x = myGameCanvas.width / 2
let y = myGameCanvas.height - 30

let dx = 2
let dy = -2

let draw = () => {
    ctx.beginPath()
    ctx.arc(x, y, 10, 0, Math.PI * 2)
    ctx.fillStyle = 'Blue'
    ctx.fill()
    ctx.closePath()
    x += dx
    y += dy
}

let drawTitle = () => {
    ctx.beginPath()
    ctx.font = '32pt Calibri';
    ctx.fillStyle = 'purple';
    ctx.fillText('BreakOut Game', 110, 42);
    ctx.closePath()
}

drawTitle()
setInterval(draw, 10)
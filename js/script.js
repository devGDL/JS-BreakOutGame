let myGameCanvas = document.getElementById('myGameCanvas')
let ctx = myGameCanvas.getContext('2d')

let x = myGameCanvas.width / 2
let y = myGameCanvas.height - 30
let dx = 2
let dy = -2
let ballRadius = 10

let drawTitle = () => {
    ctx.beginPath()
    ctx.font = '32pt Calibri';
    ctx.fillStyle = 'purple';
    ctx.fillText('BreakOut Game', 110, 42);
    ctx.closePath()
}

let draw = () => {
    clearTrial()
    drawBall()

    //Changes direction of ball
    if (y + dy > myGameCanvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy
    }

    if (x + dx > myGameCanvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dy
    }

    x += dx
    y += dy
}

let drawBall = () => {
    ctx.beginPath()
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2)
    ctx.fillStyle = 'Blue'
    ctx.fill()
    ctx.closePath()
}

let clearTrial = () => ctx.clearRect(0, 0, myGameCanvas.width, myGameCanvas.height)

drawTitle()
setInterval(draw, 20)
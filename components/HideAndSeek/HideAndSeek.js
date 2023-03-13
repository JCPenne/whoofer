import React from 'react';

import styles from './HideAndSeek.module.css';

export default function HideAndSeek() {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const canvasRef = React.useRef(); //{ current: undefined}

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    function handleMouseMove(event) {
      setMousePos({ x: event.clientX, y: event.clientY });
    }

    drawCursor(canvasRef.current, mousePos.x, mousePos.y);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });
  //On each render, either + 1 or - 1 to both x and y in randomPos object and draw the circle in the according space in the canvas
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const x = Math.floor(Math.random() * 500);
      const y = Math.floor(Math.random() * 500);
      draw(canvasRef.current, x, y);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <>
      <div>Hide And Seek</div>
      <div>
        {mousePos.x} / {mousePos.y}
      </div>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        height='500'
        width='500'
        style={{ border: '1px solid white' }}
      ></canvas>
    </>
  );
}

function drawCursor(canvas, x, y) {
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.height, canvas.width);

  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
}

function draw(canvas, x, y) {
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.height, canvas.width);

  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(x, y, 25, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
}

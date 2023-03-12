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

    draw(canvasRef.current, mousePos.x, mousePos.y);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePos]);

  return (
    <>
      {/* <div>Hide And Seek</div>
        <div>
          {mousePos.x} / {mousePos.y}
        </div> */}
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

function draw(canvas, x, y) {
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.height, canvas.width);

  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
}

// components/DraggableDiamond.js
import React, { useRef, useEffect, useState } from 'react';
import Draggable from 'react-draggable';

const DraggableDiamond = () => {
  const canvasRef = useRef(null);
  const [position, setPosition] = useState({ x: 400, y: 300 });
  const [showTooltip, setShowTooltip] = useState(true);

  const vectors = [
    { x: 300, y: 50 },
    { x: 50, y: 100 },
    { x: 700, y: 300 },
  ];

  const resultantVector = vectors.reduce(
    (acc, vector) => ({
      x: acc.x + vector.x,
      y: acc.y + vector.y,
    }),
    { x: 0, y: 0 }
  );

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement | null;
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    if(!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    let result = { x: 0, y: 0 };


    // Draw vectors
    vectors.forEach((vector) => {
      ctx.beginPath();
      ctx.moveTo(position.x + 10, position.y + 10);
      ctx.lineTo(vector.x, vector.y);
      var r = Math.sqrt((position.x + 10 - vector.x) ** 2 + (position.y + 10 - vector.y) ** 2);
      result = { x: result.x - ((position.x + 10 - vector.x) / (r ** 3)), y: result.y - ((position.y + 10 - vector.y) / (r ** 3)) };
      ctx.strokeStyle = 'black';
      ctx.stroke();

      // Draw circle at the start point
      ctx.beginPath();
      ctx.arc(vector.x, vector.y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = 'green';
      ctx.fill();
    });

    // Draw resultant vector
    ctx.beginPath();
    ctx.moveTo(position.x + 10, position.y + 10);
    ctx.lineTo((position.x + result.x * 3000000 + 10), (position.y + result.y * 3000000 + 10));
    ctx.strokeStyle = 'red';
    ctx.stroke();

    // Draw diamond
    ctx.beginPath();
    ctx.moveTo(position.x + 10, position.y - 10);
    ctx.lineTo(position.x + 20, position.y + 10);
    ctx.lineTo(position.x + 10, position.y + 30);
    ctx.lineTo(position.x, position.y + 10);
    ctx.closePath();
    ctx.fillStyle = 'white';
    ctx.fill();
  }, [position]);

  const handleDrag = (e: {}, data: { x: number, y: number }) => {
    setPosition({ x: data.x, y: data.y });
    
    setShowTooltip(false);
  };

  return (
    <div className="relative w-full h-full">
    {showTooltip && (
        <div className="absolute top-1/4 left-[400px] transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <p className="text-white font-bold text-2xl animate-pulse">Drag the white diamond</p>
        </div>
    )}
      <canvas ref={canvasRef} width={800} height={600} className="border border-white" />
      <Draggable
        position={{ x: position.x, y: position.y - 600 }}
        onDrag={(e, data) => {
          handleDrag(e, { x: data.x, y: data.y + 600 });
        }}
      >
        <div
          className="absolute"
          style={{
            width: '20px',
            height: '20px',
            background: 'transparent',
            cursor: 'grab',
          }}
        />
      </Draggable>
    </div>
  );
};

export default DraggableDiamond;

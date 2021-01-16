import React, { useRef, useEffect } from 'react';

const Canvas = props => {
  
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    context.fillStyle = '#000000';
    context.beginPath();
    context.arc(50, 100, 20, 0, 2*Math.PI);
    context.fill();

  }, [])
  
  return <canvas ref={canvasRef} {...props}/>;
}

export default Canvas
import React, { useRef, useEffect } from 'react';

const Canvas2d = props => {
  
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    props.draw(context);

  }, [])
  
  return <canvas ref={canvasRef} {...props}/>;
}

export default Canvas2d;
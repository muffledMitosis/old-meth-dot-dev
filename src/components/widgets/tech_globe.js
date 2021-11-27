import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, extend} from '@react-three/fiber'
import {Text} from 'troika-three-text'

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

extend({Text});

function Globe(porps) {
	const [rotation, setRotation] = useState([0, 0, 0, 0]);

	return <text
						position-z={-180}
						rotation={rotation}
						text={"lmao haha"}
						anchorX="center"
          anchorY="middle"
				 >
            <meshPhongMaterial attach="material" color={"#99ccff"} />
				 </text>
}

function TechGlobe(props) {
	let elem = (
		<Canvas>
			<Globe />
			<pointLight position={[-100, 0, -160]} />
      <pointLight position={[0, 0, -170]} />
      <pointLight position={[100, 0, -160]} />
		</Canvas>
	);

	return elem;
}

export default TechGlobe;
// export default Box;
"use client";

import { Canvas } from "@react-three/fiber";
import { SodaCan } from "./Sodacan";
import { View } from "@react-three/drei";



type Props = {}

const ViewCanvas = (props: Props) => {
  return (
<Canvas 
style={{
    position:"fixed",
    top:0,
    left:"50%",
    transform:"translateX(-50%)",
    overflow:"hidden",
    pointerEvents:"none",
    zIndex:30,
     
}}
shadows
dpr={[1, 1.5]}
gl={{ antialias: true }}
camera={{ fov: 30 }}
>
  <View.Port/ >
{/* <OrbitControls
enableRotate={true}
 // Set focus point
/> */}

</Canvas> 
 )
}

export default ViewCanvas
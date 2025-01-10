import React, { useRef } from "react";
import Floatingcan from "./Floatingcan";
import { Environment } from "@react-three/drei";
import { Group } from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type Props = {};

const SceneAbout = (props: Props) => {
  const aboutref = useRef<Group>(null);
  const bgcolour = ["#FFA6B5", "#E9CFF6", "#CBEF9As"];
  return (
    <group>
      <Floatingcan ref={aboutref} />
      <Environment files="/hdrs/lobby.hdr" environmentIntensity={1.6} />
    </group>
  );
};

export default SceneAbout;

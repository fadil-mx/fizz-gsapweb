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
  const bgcolour = ["#FFA6B5", "#E9CFF6", "#CBEF9A"];

  useGSAP(() => {
    if (!aboutref.current) return;

    const section = gsap.utils.toArray(".aboutsub");

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".alternative-text-view ",
        endTrigger: ".about",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    section.forEach((section, index) => {
      if (!aboutref.current) return;
      if (index === 0) return;
      const isodd = index % 2 !== 0;
      t1.to(aboutref.current.position, {
        x: isodd ? "-1" : "1",
        ease: "circ.inOut",
        delay: 0.5,
      })
        .to(
          aboutref.current.rotation,
          {
            y: isodd ? ".4" : "-.4",
            ease: "back.inOut",
          },
          "<"
        )
        .to(".aboutsub", {
          backgroundColor: gsap.utils.wrap(bgcolour, index),
        });
    });
  });

  return (
    <group position-x={1} rotation-y={-0.3} ref={aboutref}>
      <Floatingcan />
      <Environment files="/hdrs/lobby.hdr" environmentIntensity={1.6} />
    </group>
  );
};

export default SceneAbout;

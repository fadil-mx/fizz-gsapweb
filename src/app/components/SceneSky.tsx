"use client";
import React, { useRef } from "react";
import * as THREE from "three";
import * as Three from "three";
import Floatingcan from "./Floatingcan";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Center,
  Cloud,
  Clouds,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Text,
} from "@react-three/drei";
import { AmbientLight } from "three";
import { useMediaQuery } from "react-responsive";

type Props = {};

function Threetext({
  sentance,
  colour = "white",
}: {
  sentance: string;
  colour?: string;
}) {
  const word = sentance.toUpperCase().split(" ");
  const material = new THREE.MeshLambertMaterial();
  const isdesktop = useMediaQuery({ minWidth: 950 });

  return (
    <>
      {word.map((words, index) => (
        <Text
          key={`${index}-${words}`}
          scale={isdesktop ? 1 : 5}
          color={colour}
          material={material}
          font="/fonts/Alpino-Variable.woff"
          fontWeight={900}
          anchorX={"center"}
          anchorY={"middle"}
          // Adjust positioning as needed
        >
          {words}
        </Text>
      ))}
    </>
  );
}

const SceneSky = (props: Props) => {
  const groupref = useRef<Three.Group>(null);
  const cloudref1 = useRef<Three.Group>(null);
  const canref = useRef<Three.Group>(null);
  const cloudref2 = useRef<Three.Group>(null);
  const cloudsref = useRef<Three.Group>(null);
  const wordsref = useRef<Three.Group>(null);

  const angle = 75 * (Math.PI / 180);
  const getXposition = (distance: number) => distance * Math.cos(angle);
  const getYposition = (distance: number) => distance * Math.sin(angle);
  const getxyposition = (distance: number) => ({
    x: getXposition(distance),
    y: getYposition(-1 * distance),
  });

  useGSAP(() => {
    if (
      !groupref.current ||
      !cloudref1.current ||
      !canref.current ||
      !cloudref2.current ||
      !cloudsref.current ||
      !wordsref.current
    )
      return;
    // set initial positions
    gsap.set(cloudsref.current.position, { z: 20 });
    gsap.set(canref.current.position, {
      ...getxyposition(-4),
    });
    gsap.set(
      wordsref.current.children.map((child) => child.position),
      {
        ...getxyposition(7),
        z: 2,
      }
    );

    // can spinnig animation
    gsap.to(canref.current.rotation, {
      repeat: -1,
      y: Math.PI * 2,
      duration: 1.7,
      ease: "none",
    });

    // cloud animation
    const distance = 15;
    gsap.set([cloudref1.current.position, cloudref2.current.position], {
      ...getxyposition(15),
    });
    gsap.to(cloudref1.current.position, {
      y: `+=${getYposition(distance * 2)}`,
      x: `+=${getXposition(distance * -2)}`,
      repeat: -1,
      duration: 6,
      ease: "none",
    });
    gsap.to(cloudref2.current.position, {
      y: `+=${getYposition(distance * 2)}`,
      x: `+=${getXposition(distance * -2)}`,
      repeat: -1,
      duration: 6,
      delay: 5 / 2,
      ease: "none",
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skydive",
        pin: true,
        start: "top top",
        end: "+=2000",
        scrub: 1.5,
      },
    });

    tl.to(".skydive", {
      backgroundColor: "#C0F0F5",
      overwrite: "auto",
      duration: 0.1,
    })
      .to(cloudsref.current.position, { z: 0, duration: 0.3 }, 0)
      .to(canref.current.position, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "back.out(1.7)",
      })
      .to(
        wordsref.current.children.map((word) => word.position),
        {
          keyframes: [
            { x: 0, y: 0, z: -1 },
            { ...getxyposition(-7), z: -7 },
          ],
          stagger: 0.3,
        }
      )
      .to(canref.current.position, {
        ...getxyposition(4),
        duration: 0.5,
        ease: "back.out(1.7)",
      })
      .to(cloudsref.current.position, { z: 20, duration: 0.5 });
  });

  return (
    <>
      <PerspectiveCamera makeDefault fov={12} position={[0, 0, 18]} />{" "}
      <group ref={groupref}>
        {/* can */}

        <group rotation={[0, 0, 0.5]}>
          <Floatingcan
            ref={canref}
            floatSpeed={3}
            floatIntensity={3}
            rotationIntensity={0}
          ></Floatingcan>
        </group>

        {/* cloud */}

        <Clouds ref={cloudsref}>
          <Cloud ref={cloudref1} bounds={[10, 10, 2]} />
          <Cloud ref={cloudref2} bounds={[10, 10, 2]} />
        </Clouds>

        {/* text */}

        <group ref={wordsref}>
          <Threetext sentance="dive into better health" colour="black" />
        </group>

        {/* <OrbitControls /> */}

        <ambientLight intensity={2} color="#9DDEFA" />
        <Environment files="/hdrs/field.hdr" environmentIntensity={1.5} />
      </group>
    </>
  );
};

export default SceneSky;

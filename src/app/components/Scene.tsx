"use client";
import React, { useRef } from "react";
import { Environment, OrbitControls, SpotLight } from "@react-three/drei";
import Floatingcan from "./Floatingcan";
import { Group } from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useStore } from "../hooks/useStore";

gsap.registerPlugin(ScrollTrigger);
type Props = {};

const Scene = (props: Props) => {
  const { isready } = useStore();

  const can1ref = useRef<Group>(null);
  const can2ref = useRef<Group>(null);
  const can3ref = useRef<Group>(null);
  const can4ref = useRef<Group>(null);
  const can5ref = useRef<Group>(null);

  const can1groupref = useRef<Group>(null);
  const can2groupref = useRef<Group>(null);

  const groupref = useRef<Group>(null);

  useGSAP(() => {
    if (
      !can1ref.current ||
      !can2ref.current ||
      !can3ref.current ||
      !can4ref.current ||
      !can5ref.current ||
      !can1groupref.current ||
      !can2groupref.current ||
      !groupref.current
    )
      return;
    isready();

    gsap.set(can1ref.current.position, {
      x: -1.7,
    });
    gsap.set(can1ref.current.rotation, {
      z: -0.4,
    });

    gsap.set(can2ref.current.position, {
      x: 1.8,
    });
    gsap.set(can2ref.current.rotation, {
      z: 0.4,
    });

    gsap.set(can3ref.current.position, {
      y: 5,
      z: 2,
    });
    gsap.set(can4ref.current.position, {
      x: 2,
      y: 4,
      z: 2,
    });
    gsap.set(can5ref.current.position, {
      y: -5,
    });

    const t1 = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "back.out(1.4)",
      },
    });
    if (window.scrollY < 12) {
      t1.from(can1groupref.current.position, { y: -5, x: 1 }, 0)
        .from(can1groupref.current.rotation, { z: 3 }, 0)
        .from(can2groupref.current.position, { y: 5, x: 1 }, 0)
        .from(can2groupref.current.rotation, { z: 3 }, 0);
    }
    const scrolltrigger = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        // markers: true,
      },
    });
    scrolltrigger
      .to(groupref.current.rotation, {
        y: Math.PI * 2,
      })
      //can1 animation
      .to(
        can1ref.current.position,
        {
          x: -0.3,
          y: -0.7,
          z: -2,
        },
        0
      )
      .to(
        can1ref.current.rotation,
        {
          z: -0.3,
        },
        0
      )

      //can2 animation
      .to(
        can2ref.current.position,
        {
          x: 1,
          y: -0.2,
          z: -1,
        },
        0
      )
      .to(can2ref.current.rotation, { z: 0 }, 0)

      // //can3 animation
      .to(
        can3ref.current.position,
        {
          x: -0.3,
          y: 0.5,
          z: -1,
        },
        0
      )
      .to(can3ref.current.rotation, { z: 0.3 }, 0)

      //can4 animation
      .to(
        can4ref.current.position,
        {
          x: 0,
          y: -0.3,
          z: 0.5,
        },
        0
      )
      .to(can4ref.current.rotation, { z: 0.3 }, 0)

      //can5 animation
      .to(
        can5ref.current.position,
        {
          x: 0.3,
          y: 0.5,
          z: -0.5,
        },
        0
      )
      .to(can5ref.current.rotation, { z: -0.2 }, 0)
      .to(
        groupref.current.position,
        { x: 1, duration: 3, ease: "sine.inOut" },
        1.5
      );
  });

  return (
    <group ref={groupref}>
      <group ref={can1groupref}>
        <Floatingcan ref={can1ref} flavor="blackCherry" />
      </group>
      <group ref={can2groupref}>
        <Floatingcan ref={can2ref} flavor="lemonLime" />
      </group>
      <Floatingcan ref={can3ref} flavor="grape" />
      <Floatingcan ref={can4ref} flavor="strawberryLemonade" />
      <Floatingcan ref={can5ref} flavor="watermelon" />

      <Environment files="/hdrs/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
};

export default Scene;

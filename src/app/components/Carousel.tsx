"use client";
import React, { useRef, useState } from "react";
import { SodaCanProps } from "./Sodacan";
import { Center, View } from "@react-three/drei";
import Floatingcan from "./Floatingcan";
import { Environment } from "@react-three/drei";
import { DirectionalLight, Group } from "three";
import { ArrowIcon } from "./ArrowButton";
import clsx from "clsx";
import { WavyCircles } from "./Wavycircle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

type Props = {};
type arrowbuttonProps = {
  label: string | " ";
  onClick: () => void;
  direction: "left" | "right";
};
function Arrowbutton({ label, onClick, direction }: arrowbuttonProps) {
  return (
    <button
      className="z-40 rounded-full border-2 border-white bg-white/10 p-3 ring-white 
      focus:outline-none focus-visible:opacity-100   focus-visible:ring-4 md:size-16 lg:size-20 "
      onClick={onClick}
    >
      <ArrowIcon className={clsx(direction === "right" && "-scale-x-100")} />
    </button>
  );
}

const Carousel = (props: Props) => {
  const FLAVORS: {
    flavor: SodaCanProps["flavor"];
    color: string;
    name: string;
  }[] = [
    { flavor: "blackCherry", color: "#710523", name: "Black Cherry" },
    { flavor: "grape", color: "#572981", name: "Grape Goodness" },
    { flavor: "lemonLime", color: "#164405", name: "Lemon Lime" },
    {
      flavor: "strawberryLemonade",
      color: "#690B3D",
      name: "Strawberry Lemonade",
    },
    { flavor: "watermelon", color: "#4B7002", name: "Watermelon Crush" },
  ];

  const [currentFlavor, setCurrentFlavor] = useState(0);
  const changeFlavor = (index: number) => {
    if (!sodacanrefwavey.current) return;
    const nextindex = (index + FLAVORS.length) % FLAVORS.length;

    const t1 = gsap.timeline();

    t1.to(
      sodacanrefwavey.current.rotation,
      {
        y:
          index > currentFlavor
            ? `-=${Math.PI * 2 * 1.5}`
            : `+= ${Math.PI * 2 * 1.5}`,
        duration: 1,
        ease: "power2.inOut",
      },
      0
    ).to(
      ".background ,.wavy-circles-outer,.wavy-circles-inner",
      {
        backgroundColor: FLAVORS[nextindex].color,
        fill: FLAVORS[nextindex].color,
        ease: "power2.inOut",
        duration: 1,
      },
      0
    );
    // .to(
    //   ".text-wrapper",
    //   {
    //     duration: 2,
    //     y: "-10",
    //     opacity: 0,
    //   },
    //   0
    // )
    // .to(
    //   {},
    //   {
    //     onStart: () => {
    //       setCurrentFlavor(nextindex);
    //     },
    //   }
    // )
    // .to(".text-wrapper", {
    //   duration: 2,
    //   y: "0",
    //   opacity: 1,
    // })
    setCurrentFlavor(nextindex);
  };

  const sodacanrefwavey = useRef<Group>(null);

  return (
    <div className="carousel bg-white text-white min-h-dvh w-screen relative grid grid-rows-[auto,4fr,auto] overflow-hidden py-12 justify-center ">
      <div className=" background pointer-events-none absolute inset-0 bg-[#710523] opacity-50"></div>
      <WavyCircles className="absolute left-1/2 -translate-x-1/2  top-1/2 -translate-y-1/2 h-[120vmin] text-[#710523]" />
      <h2 className="relative text-center text-5xl font-bold">
        Choose Your Flavor
      </h2>
      <div className="grid grid-cols-[auto,auto,auto] items-center ">
        {/* left */}
        <Arrowbutton
          onClick={() => changeFlavor(currentFlavor + 1)}
          label="Next"
          direction="left"
        />
        {/* can */}
        <View className=" aspect-square h-[70vmin] min-h-40">
          <Center position={[0, 0, 1.5]}>
            <Floatingcan
              ref={sodacanrefwavey}
              floatIntensity={0.3}
              rotationIntensity={1}
              flavor={FLAVORS[currentFlavor].flavor}
            />
            <Environment
              files="/hdrs/lobby.hdr"
              environmentIntensity={0.9}
              environmentRotation={[0, 3, 0]}
            />
            <directionalLight intesity={6} position={[0, 1, 1]} />
          </Center>
        </View>
        {/* right */}
        <Arrowbutton
          onClick={() => changeFlavor(currentFlavor - 1)}
          label="Previous"
          direction="right"
        />
      </div>
      <div className="relative text-area text-center mx-auto">
        <p className="text-wrapper text-4xl font-medium">
          {FLAVORS[currentFlavor].name}
        </p>
        <div className="mt-2 text-2xl font-normal opacity-90">
          <p>12 can - $34.99</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

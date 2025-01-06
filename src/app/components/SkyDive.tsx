"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { View } from "@react-three/drei";
import SceneSky from "./SceneSky";

type Props = {};

const SkyDive = (props: Props) => {
  return (
    <div className="skydive h-screen bg-[#D9F99D]">
      <h2 className="sr-only text-black">sasasasasas</h2>
      <View className="h-screen w-screen">
        <SceneSky />
      </View>
    </div>
  );
};

export default SkyDive;

"use client";
import { Float } from "@react-three/drei";
import React, { forwardRef, ReactNode } from "react";
import { SodaCan, SodaCanProps } from "./Sodacan";
import { Group } from "three";

type Floatingcanprops = {
  flavor?: SodaCanProps["flavor"];
  floatSpeed?: number;
  floatIntensity?: number;
  rotationIntensity?: number;
  floatingRange?: [number, number];
  children?: ReactNode;
};

const Floatingcan = forwardRef<Group, Floatingcanprops>(
  (
    {
      flavor = "blackCherry",
      floatSpeed = 1.5,
      floatIntensity = 1,
      rotationIntensity = 1,
      floatingRange = [-0.1, 0.1],
      children,
      ...props
    },
    ref
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatSpeed}
          rotationIntensity={rotationIntensity}
          floatIntensity={floatIntensity}
          floatingRange={floatingRange}
        >
          {children}
          <SodaCan flavor={flavor} />
        </Float>
      </group>
    );
  }
);

export default Floatingcan;

"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import { TextSplitter } from "./textSplitter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import { Bubbles } from "./Bubble";
gsap.registerPlugin(ScrollTrigger);
import { useStore } from "../hooks/useStore";
import { useMediaQuery } from "react-responsive";

type Props = {};

const Hero = (props: Props) => {
  const desktop = useMediaQuery({ minWidth: 1024 });
  console.log(desktop);
  const ready = useStore((state) => state.ready);
  useGSAP(
    () => {
      if (!ready && desktop) return;
      const introtl = gsap.timeline();
      introtl
        .set(".hero", { opacity: 1 })
        .from(".hero-header-word", {
          scale: 3,
          opacity: 0,
          ease: "power4.in",
          delay: 0.2,
          stagger: 1,
        })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 30,
          },
          "+=.8"
        )
        .from(".hero-body", {
          opacity: 0,
          y: 10,
        })
        .from(".hero-button", {
          opacity: 0,
          y: 10,
          duration: 0.6,
        });

      const scrollt1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".main-hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          markers: true,
        },
      });

      scrollt1.fromTo(
        ".main-hero",
        {
          backgroundColor: "#FDE047",
        },
        {
          backgroundColor: "#D9F99D",
          overwrite: "auto",
        },
        1
      );

      scrollt1.from(".text-side-heading .split-char", {
        opacity: 0,
        scale: 1.3,
        y: 40,
        rotate: -25,
        stagger: 0.1,
        ease: "black.out(3)",
      });
    },
    { dependencies: [ready] }
  );

  return (
    <section className="main-hero ">
      <div className="opacity-0 hero mx-auto flex w-full max-w-7xl flex-col items-center px-4 first:pt-10 md:px-6 ">
        {desktop && (
          <View className="hero-scene  pointer-events-none sticky h-screen w-screen hidden md:block top-0 z-50  -mt-[100vh]">
            <Scene />
            <Bubbles count={300} minSpeed={0.5} repeat={true} />
          </View>
        )}
        <div className="grid ">
          <div className="grid h-screen place-items-center">
            <div className="text-center grid auto-rows-min place-items-center">
              <h1 className="hero-header text-7xl font-black uppercase leading-[.8] text-orange-500 md:text-[9rem] lg:text-[13rem] -mt-28">
                <TextSplitter
                  text=" live gusty"
                  wordDisplayStyle="block"
                  className="hero-header-word"
                />
              </h1>
              <p className="text-5xl hero-subheading font-semibold text-sky-950 lg:text-6xl  mt-12 ">
                Soda Perfect
              </p>
              <p className="text-sky-950 hero-body text-2xl font-normal">
                3.5g suger,9g fiber,5 delicious flavours.
              </p>
              <Button
                className="mt-12 hero-button "
                buttonLink="#dsd"
                buttonTxt="Shop Now"
              />
            </div>
          </div>
          <div className="grid text-side relative z-[80] h-screen items-center gap-4 md:grid-cols-2">
            <Image
              src="/all-cans-bunched.png"
              alt="hero"
              width={500}
              height={500}
              className="md:hidden w-full"
            />
            <div className="">
              <h2 className="text-side-heading text-balance text-6xl font-black text-sky-950 uppercase lg:text-8xl">
                T<TextSplitter text="ry all flavours" />
              </h2>
              <p className="text-sky-950 text-side body mt-4 max-w-xl text-balance  text-xl font-normal">
                Our soda is made with real fruit juice and a touch of cane
                sugar. We never use artificial sweeteners or high fructose corn
                syrup. Try all five flavors and find your favorite! Dive into
                better health
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

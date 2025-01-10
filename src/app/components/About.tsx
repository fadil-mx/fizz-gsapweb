"use client";
import { View } from "@react-three/drei";
import React from "react";
import SceneAbout from "./SceneAbout";

type Props = {};

const About = (props: Props) => {
  const sodaBenefits = [
    {
      title: "Gut-Friendly Goodness",
      description:
        "Our soda is packed with prebiotics and 1 billion probiotics, giving your gut the love it deserves. Say goodbye to bloating and hello to a happy, healthy digestive system with every sip.",
    },
    {
      title: "Light Calories, Big Flavor",
      description:
        "Indulge in bold, refreshing taste without the guilt. At just 20 calories per can, you can enjoy all the flavor you crave with none of the compromise.",
    },
    {
      title: "Naturally Refreshing",
      description:
        "Made with only the best natural ingredients, our soda is free from artificial sweeteners and flavors. It’s a crisp, clean taste that feels as good as it tastes, giving you a boost of real, natural refreshment.",
    },
  ];

  return (
    <div className="text-sky-950 relative about bg-yellow-300 ">
      <div className="">
        <div className="relative grid">
          <View className="h-screen alternative-text-view absolute  left-0 top-0 w-full">
            <SceneAbout />
          </View>
          {sodaBenefits.map((benefit, index) => (
            <div
              key={index}
              className="aboutsub gap-x-12 h-screen grid md:grid-cols-2 items-center"
            >
              <div
                className={`${index % 2 === 0 ? "col-start-1" : "col-start-2"} p-12  `}
              >
                <h2 className=" text-6xl  text-balance font-bold">
                  {benefit.title}
                </h2>
                <p className="text-xl mt-5">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

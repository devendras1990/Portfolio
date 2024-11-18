"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Adobe XD",
    designation: "UI/UX Design",
    image:
      "/images/skills/xd.webp",
  },
  {
    id: 2,
    name: "Adobe illustrator",
    designation: "UI/UX Design",
    image:
      "/images/skills/ai.png",
      },
  {
    id: 3,
    name: "Figma",
    designation: "UI/UX Design",
    image:
      "/images/skills/figma.png",
  },
  {
    id: 4,
    name: "Adobe After Effects",
    designation: "Animation",
    image:
      "/images/skills/after-effects.png",
  },
  {
    id: 5,
    name: "Photoshop",
    designation: "Graphic Design",
    image:
      "/images/skills/photoshop.png",
  },
  {
    id: 6,
    name: "LottieFiles",
    designation: "Animation Design",
    image:
      "/images/skills/ltti.png",
  },
];

export default function MainSkills() {
  return (
    <div className="flex flex-row items-center justify-center my-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

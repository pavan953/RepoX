import React from "react";
import { Spotlight } from "./ui/spotlight";
import { Navbar } from "./mainNavbar";
import Link from "next/link";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:top-10"
          fill="blue"
        />
        <div className="text-center leading-8">
          <h1 className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-7xl font-bold leading-[150%] tracking-tight text-transparent">
            Transform your Learning with <br />
            <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-9xl font-semibold text-transparent">
              {" "}
              Contributions
            </span>
          </h1>
          <p className="text-lg text-gray-500">
            A platform where you can contribute to real-world projects in a
            closed environment.
          </p>
        </div>
        <div className="mt-10">
          <Link href={"/sign-in"}>
            <Button
              className="text-slate-100 hover:text-slate-200 font-bold rounded-full outline-blue-600 outline"
              variant={"outline"}
              size={"lg"}
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

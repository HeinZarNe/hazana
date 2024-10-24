"use client"
import React, { useEffect, useState } from "react";
import { HomeCarousel } from "./HomeCarousel";
import AppPromotionCard from "./AppPromotionCard";
import CategoryCards from "./CategoryCards";

const Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect
    (() => {
      // Function to check screen width
      const checkScreenWidth = () => {
        setIsSmallScreen(window.innerWidth < 768); // Change to your desired width
      };

      // Check screen size initially
      checkScreenWidth();

      // Add event listener to monitor screen resize
      window.addEventListener('resize', checkScreenWidth);

      // Cleanup event listener on component unmount
      return () => window.removeEventListener('resize', checkScreenWidth);
    }, []);
  return (
    <div className="w-full flex flex-col gap-3 py-2">
      {!isSmallScreen && (<div className="w-full  flex-row hidden md:flex sm:flex-nowrap flex-wrap items-center justify-center gap-2">
        <HomeCarousel />
        <AppPromotionCard />
      </div>)}
      <CategoryCards />
    </div>
  );
};

export default Hero;

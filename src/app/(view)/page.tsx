import {
  CategorySection,
  FeatureProductsSection,
  HeroSection,
  ScrollSlider,
} from "@/components/pages/home";
import React from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <ScrollSlider />
      <FeatureProductsSection />
    </div>
  );
}

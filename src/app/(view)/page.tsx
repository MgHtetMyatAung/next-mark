import {
  CategorySection,
  FeatureProductsSection,
  HeroSection,
} from "@/components/pages/home";
import React from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <FeatureProductsSection />
    </div>
  );
}

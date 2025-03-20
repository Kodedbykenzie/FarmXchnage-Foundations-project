import React from 'react';
import { HeroSection } from '../../components/HeroSection';
import { FeaturedProducts } from '../../components/FeaturedProducts';
import { CategorySection } from '../../components/CategorySection';
import { DashboardPreview } from '../../components/DashboardPreview';
export function HomePage() {
  return <>
      <HeroSection />
      <FeaturedProducts />
      <CategorySection />
      <DashboardPreview />
    </>;
}
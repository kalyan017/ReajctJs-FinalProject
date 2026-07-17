import React from 'react'
import Hero from '../components/Hero'
import CategorySection from '../components/CategorySection'
import FeaturedProducts from "../components/FeaturedProducts";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <div>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </div>
  )
}

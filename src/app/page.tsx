import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { LogoTicker } from "@/sections/LogoTicker";
import { Features } from "@/sections/Features";
import { Features2 } from "@/sections/Features2";
import { Features3 } from "@/sections/Features3";
import { FAQS } from "@/sections/FAQS";
import { ProjectsSection } from "@/sections/Projects";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <ProductShowcase/>
      <LogoTicker/>
      <Features/>
      <Features2/>
      <Features3/>
      <FAQS/>
      <ProjectsSection/>
      <Footer/>
    </>
  )
}

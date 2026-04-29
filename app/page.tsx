import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Stats from "@/components/StatsSection";
import Work from "@/components/Work";
import Test  from "@/components/Testimonials";
import Cta  from "@/components/Cta";
import Jobs  from "@/components/JobDisplay";
import JobPipelineSection from "@/components/pipeline";
import NewHero from "@/components/newHero"
import TextSlider from "@/components/TextSlider";
export default async function HomePage(
  ){
  return (
    <div>
       <TextSlider/>
      <Hero/>
      <JobPipelineSection/>
      <NewHero/>
      <Jobs/>
      <Service/>
      <Test/>
      <Stats/>
      <Cta/>
      <Work/>
      
    </div>
  );
  }
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
import HeadlineSlider from "@/components/headline";
import ServicesBlock from "@/components/services";
export default async function HomePage(
  ){
  return (
    <div>
      <HeadlineSlider/>
      <Hero/>
       <TextSlider/>
      <JobPipelineSection/>
      <ServicesBlock/>
      <HeadlineSlider/>
      <Jobs/>
      <NewHero/>
      <Service/>
      <Test/>
      <Stats/>
      <Cta/>
      <Work/>
      
    </div>
  );
  }
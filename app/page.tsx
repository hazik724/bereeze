import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Stats from "@/components/StatsSection";
import Work from "@/components/Work";
import Test  from "@/components/Testimonials";
import Cta  from "@/components/Cta";
import Jobs  from "@/components/JobDisplay";
export default async function HomePage(
  ){
  return (
    <div>
      <Hero/>
      <Jobs/>
      <Service/>
      <Test/>
      <Stats/>
      <Cta/>
      <Work/>
    </div>
  );
  }
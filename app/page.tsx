import { About } from "@/components/blocks/About";
import { Cta } from "@/components/blocks/Cta";
import {Demo}from "@/components/blocks/Demo/demo";
import { FAQ } from "@/components/blocks/FAQ";
import { Features } from "@/components/blocks/Features";
import { Footer } from "@/components/blocks/Footer";
import { Hero } from "@/components/blocks/Hero";
import { HowItWorks } from "@/components/blocks/HowItWorks";
import { Navbar } from "@/components/blocks/Navbar";
import { Newsletter } from "@/components/blocks/Newsletter";
import { Pricing } from "@/components/blocks/Pricing";
import { ScrollToTop } from "@/components/blocks/ScrollToTop";
import { Services } from "@/components/blocks/Services";
import { Sponsors } from "@/components/blocks/Sponsors";
import { Team } from "@/components/blocks/Team";
import { Testimonials } from "@/components/blocks/Testimonials";
import { Suspense } from "react";
import { Demo as Appointment } from "@/components/blocks/Appointment";
export default function Home() {
 
  return (
    <>
      <Navbar />
      <Hero />
      <Demo/>
      <Sponsors />
      <About />
      <HowItWorks />
      {/* <Features /> */}
      <Services />
      <Cta />
      {/* <Testimonials /> */}
      {/* <Team /> */}
      <Pricing />
      <div className="my-4">
				<Suspense>
          <Appointment/>
				</Suspense>
			</div>
     <Newsletter />
       {/* <FAQ /> */}
      <Footer />
      <ScrollToTop />
    </>
  );
}

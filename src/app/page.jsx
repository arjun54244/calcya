import AboutSectionOne from "../components/About/AboutSectionOne";
import ScrollUp from "../components/Common/ScrollUp";
import Contact from "../components/Contact/Contact";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import Video from "../components/Video";

export const metadata = {
  title: "Calcya",
  description: "",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <AboutSectionOne />
      <Contact />
    </>
  );
}

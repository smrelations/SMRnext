import Image from "next/image";
import Seo from "./components/seo";
import OpeningVideo from "./components/openingVideo";
import WeAre from "./components/weAre";
import Marquees from "./components/marquees";
import Layout from "./components/layout";
import Badges from "./components/badges";
import Services from "./components/services";
import Bio from "./components/bio";
import ContactForm from "./components/form";

export default function Home() {
  return (
      <Layout>
    <Seo title="Home" />
    <OpeningVideo></OpeningVideo>
    <WeAre></WeAre>
    <Marquees></Marquees>
    <Badges></Badges>
    <Services></Services>
    <Bio></Bio>
    <ContactForm></ContactForm>
  </Layout>
  );
}

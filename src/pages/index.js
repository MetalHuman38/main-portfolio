import Accomplishments from "../components/accomplishments/Accomplishments";
import BackgroundAnimation from "../components/backgroundAnimation/BackgroundAnimation";
import Hero from "../components/hero/Hero";
import Project from "../components/projects/Project";
import Technologies from "../components/technologies/Technologies";
import TimeLine from "../components/timeline/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Section grid="true">
        <Hero />
        <BackgroundAnimation />
      </Section>
      <Project />
      <Technologies />
      <TimeLine />
      <Accomplishments />
    </Layout>
  );
};

export default Home;

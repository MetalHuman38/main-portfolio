import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br /> MetalBrain
      </SectionTitle>
      <SectionText>
        We merge technical excellence with creative vision to drive digital
        transformation and elevate your business to the forefront of technology.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://www.linkedin.com/in/babatunde-kalejaiye-729248125/")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);
export default Hero;

import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AccomplishmentsStyles";
import { data } from "../../constants/Constants";

// const data = [
//   { number: 20, text: "Open Source Projects" },
//   { number: 1000, text: "Students" },
//   { number: 1900, text: "Github Followers" },
//   { number: 5000, text: "Github Stars" },
// ];

const Accomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Accomplishments;

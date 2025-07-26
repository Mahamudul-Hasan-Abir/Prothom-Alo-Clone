"use client";

import Container from "@/components/Container/Container";
import AdSection from "@/Sections/AdSection";
import ApnarJonnoSection from "@/Sections/ApnarJonnoSection";
import Bangladesh from "@/Sections/Bangladesh";
import MainSection from "@/Sections/MainSection";
import World from "@/Sections/World";

export default function Home() {
  return (
    <div>
      <Container>
        <MainSection></MainSection>
      </Container>
      <AdSection></AdSection>
      <Container>
        <ApnarJonnoSection></ApnarJonnoSection>
      </Container>
      <Container>
        <Bangladesh></Bangladesh>
      </Container>
      <Container>
        <World></World>
      </Container>
    </div>
  );
}

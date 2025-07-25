"use client";

import Container from "@/components/Container/Container";
import AdSection from "@/Sections/AdSection";
import ApnarJonnoSection from "@/Sections/ApnarJonnoSection";
import MainSection from "@/Sections/MainSection";

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
    </div>
  );
}

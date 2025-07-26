"use client";

import Container from "@/components/Container/Container";
import BlankSection from "@/Phone/PhoneSection/BlankSection";
import Chadabaj from "@/Phone/PhoneSection/Chadabaj";
import TabletHero from "@/Phone/PhoneSection/HeroSection";
import JulyKotha from "@/Phone/PhoneSection/JulyKotha";
import Shorker from "@/Phone/PhoneSection/Shorker";
import Thiland from "@/Phone/PhoneSection/Thiland";
import Trump from "@/Phone/PhoneSection/Trump";
import UttorayBiman from "@/Phone/PhoneSection/UttorayBiman";
import Younuse from "@/Phone/PhoneSection/Younuse";
import AdSection from "@/Sections/AdSection";
import ApnarJonnoSection from "@/Sections/ApnarJonnoSection";
import Bangladesh from "@/Sections/Bangladesh";
import Business from "@/Sections/Business";
import Entertainment from "@/Sections/Entertainment";
import FourSection from "@/Sections/FourSection";
import Life from "@/Sections/Life";

import MainSection from "@/Sections/MainSection";
import Onnanno from "@/Sections/Onnanno";
import Opinion from "@/Sections/Opinion";
import SecondFourSection from "@/Sections/SecondFourSection";
import Sports from "@/Sections/Sports";
import World from "@/Sections/World";

export default function Home() {
  return (
    <div>
      {/* Desktop/Large Screen Content (lg and above) */}
      <div className="hidden lg:block">
        <Container>
          <MainSection></MainSection>
        </Container>
        <AdSection></AdSection>
        <Container>
          <ApnarJonnoSection></ApnarJonnoSection>
        </Container>
        <Container>
          <Sports></Sports>
        </Container>
        <Container>
          <Bangladesh></Bangladesh>
        </Container>
        <Container>
          <World></World>
        </Container>
        <Container>
          <Entertainment></Entertainment>
        </Container>
        <Container>
          <Life></Life>
        </Container>
        <Container>
          <Opinion></Opinion>
        </Container>
        <Container>
          <Business></Business>
        </Container>
        <Container>
          <FourSection></FourSection>
        </Container>
        <Container>
          <SecondFourSection></SecondFourSection>
        </Container>
        <Container>
          <Onnanno></Onnanno>
        </Container>
      </div>

      {/* Tablet and Phone Content (below lg) */}
      <div className="block lg:hidden">
        <Container>
          <TabletHero></TabletHero>
        </Container>
        <Container>
          <BlankSection></BlankSection>
        </Container>
        <Container>
          <Younuse></Younuse>
        </Container>
        <Container>
          <JulyKotha></JulyKotha>
        </Container>
        <Container>
          <Trump></Trump>
        </Container>
        <Container>
          <UttorayBiman></UttorayBiman>
        </Container>
        <Container>
          <Thiland></Thiland>
        </Container>
        <Container>
          <Shorker></Shorker>
        </Container>
        <Container>
          <Chadabaj></Chadabaj>
        </Container>
      </div>
    </div>
  );
}

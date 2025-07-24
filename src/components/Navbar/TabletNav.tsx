"use client";

import React, { useState } from "react";
import Container from "../Container/Container";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import Image1 from "../../../public/assets/nav 3 image/1.avif";
import Image2 from "../../../public/assets/nav 3 image/2.avif";
import Image3 from "../../../public/assets/nav 3 image/3.avif";
import {
  Camera,
  CirclePlay,
  Dock,
  Globe,
  Menu,
  Search,
  User,
} from "lucide-react";

const navItems = [
  "সর্বশেষ",
  "রাজনীতি",
  "বাংলাদেশ",
  "অপরাধ",
  "বিশ্ব",
  "বাণিজ্য",
  "মতামত",
  "খেলা",
  "বিনোদন",
  "চাকরি",
  "জীবনযাপন",
];

const TabletNav = () => {
  return (
    <div>
      <div className="border-b border-gray-300">
        <Container>
          <div className="flex justify-between items-center">
            <div className=" h-16 flex justify-center items-center">
              <div className="h-12 w-52 relative">
                <Image src={logo} alt="app logo" fill></Image>
              </div>
            </div>
            <div className="flex gap-2 items-center text-gray-700">
              <div className="border-r pr-5">
                <Search></Search>
              </div>
              <div className="flex gap-2 items-center">
                <User></User>
                <p className="text-lg ">Login</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <div></div>
        <div>
          <div>
            <Globe></Globe>
            <p>Eng</p>
          </div>
          <div>
            <Menu></Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletNav;

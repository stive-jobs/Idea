"use client";
import Link from "next/link";
import React from "react";
import LogoIcon from "~/icon/logo";
import DesktopToggleMenu from "./desktopToggleMenu";


const BannerNavBar = () => {
  return (
    <div className="container flex items-center gap-[4rem] mt-5">
      <div>
        <Link href="/" className="m-0">
          <LogoIcon />
        </Link>
      </div>
      <nav className="bg-pink-600 p-4">
        <div className="container mx-auto flex justify-between items-center gap-10">
          <div className="text-white text-xl font-bold">
            Mahsulotlar katalogi
          </div>
          <div className="hidden md:block">
            <DesktopToggleMenu />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default BannerNavBar;

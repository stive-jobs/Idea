"use client";
import Link from "next/link";
import React from "react";
import LogoIcon from "~/icon/logo";

const BannerNavBar = () => {
  return (
    <div className="container flex items-center gap-[4rem] mt-5">
      <div>
        <Link href="/" className="m-0">
          <LogoIcon />
        </Link>
      </div>
      <nav className="select">
        <select name="format" id="format">
          <option selected disabled>
            
          </option>
          <option value="pdf">PDF</option>
          <option value="txt">txt</option>
          <option value="epub">ePub</option>
          <option value="fb2">fb2</option>
          <option value="mobi">mobi</option>
        </select>
      </nav>
    </div>
  );
};

export default BannerNavBar;

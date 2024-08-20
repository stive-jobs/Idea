import Image from "next/image";
import React, { useState } from "react";
import uzFlag from "~/icon/uzb-flag.png";
import '~/app/globals.css'

const LanguageSelector = () => {
  const [language, setLanguage] = useState("en");

  return (
    <div className="flex gap-2 items-center">
      <Image src={uzFlag} alt="flag" width={28} height={18} />
      <select value={language}>
        <option value="uz">Uzbekistan</option>
        <option value="ru">Russian</option>
      </select>
    </div>
  );
};

export default LanguageSelector;

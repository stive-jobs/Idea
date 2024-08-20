import React, { useState } from 'react'

const LanguageSelector = ({ onLanguageChange }) => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    onLanguageChange(selectedLanguage);
  };

  return (
    <select value={language} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
      <option value="de">German</option>
      <option value="zh">Chinese</option>
    </select>
  )
}

export default LanguageSelector
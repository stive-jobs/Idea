import React, { useState } from 'react'
import axios from 'axios';
import LanguageSelector from '.';

const LanguagePage = () => {
    const [translatedText, setTranslatedText] = useState('');

    const handleLanguageChange = async (LanguageCode: string) => {
        try {
            const response = await axios.post(
                `https://translation.googleapis.com/language/translate/v2`,
                {},
                {
                    params: {
                        q: 'Bu yerga tarjima qilinadigan matnni kiriting', // Bu joyni saytingizdagi kontent bilan dinamik ravishda almashtirishingiz mumkin
                        target: LanguageCode,
                        key: 'f51b1112146b0f16dadd5e7567a198d26d62c91b'
                    },
                }
            );
            setTranslatedText(response.data.data.translations[0].translatedText);
        } catch (error) {
            console.log('Matnni tarjima qilishda xato', error);
            
        }
    };

    return (
        <div>
            <LanguageSelector onLanguageChange={handleLanguageChange} />
            <div dangerouslySetInnerHTML={{__html: translatedText}} />
        </div>
    )
}

export default LanguagePage
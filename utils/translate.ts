export async function translatetext(text: string, targetLanguage: string): Promise<string> {
    const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            q: text,
            target: targetLanguage,
        }),
    });

    const data = await response.json();
    return data.data.translations[0].translatedText;
}
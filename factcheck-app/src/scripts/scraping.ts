import puppeteer from 'puppeteer';

export async function scrapeDynamicText(url: string): Promise<string> {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the URL
    await page.goto(url, { waitUntil: 'networkidle2' });

    // Wait for dynamically loaded content to appear
    await page.waitForSelector('p');

    // Extract text contents
    const paragraphs = await page.evaluate(() => {
        const paragraphElements = document.querySelectorAll('p');
        if (!paragraphElements) return "No paragraphs found on the page";
        const paragraphTexts = Array.from(paragraphElements).map(p => p.textContent?.trim());
        return paragraphTexts.filter(Boolean); // Remove empty paragraphs
    });

    await browser.close();
    return paragraphs;
  } catch (error) {
    console.error('Error scraping dynamic text:', error);
    return '';
  }
}

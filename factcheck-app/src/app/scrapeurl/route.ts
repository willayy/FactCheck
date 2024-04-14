
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function POST(request: Request) {

    const { url: inputURL } = await request.json();

    if (!inputURL) {
        return NextResponse.json("URL not provided");
    }
    
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
    
        // Navigate to the URL
        await page.goto(inputURL, { waitUntil: "networkidle2" });
    
        // Wait for dynamically loaded content to appear
        await page.waitForSelector("p");
    
        // Extract text contents
        const paragraphs = await page.evaluate(() => {
          const paragraphElements = document.querySelectorAll("p");
          const paragraphTexts = Array.from(paragraphElements).map(p => p.textContent?.trim());
          return paragraphTexts.filter(Boolean); // Remove empty paragraphs
        });
    
        await browser.close();
        return NextResponse.json(paragraphs.join(' '));
    } 
    catch (error) {
        return NextResponse.json("An error occured" + error);
    }
}


export async function scrapeTextFromUrl(url: string) {
    const res = await fetch("/scrapeurl", 
        // Sends a JSON object as a POST request to the server.
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url })
        }
    );
    let text = await res.json();
    return text;
  }
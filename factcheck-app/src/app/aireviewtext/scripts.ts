export async function local_aiReviewText(text: string) {
  const res = await fetch("/aireviewtext",
      // Sends a JSON object as a POST request to the server.
      {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ text })
      }
  );
  let reviewedText = await res.json();
  return reviewedText;
}


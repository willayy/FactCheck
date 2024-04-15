import OpenAI from "openai";

const local_llm = new OpenAI({baseURL: "http://localhost:3001/v1", apiKey: "lm-studio"});

const initalPrompt = "You are an ai factchecking tool that reviews articles and looks for statements that arent supported by a cited source, statements that use emotional language or use language in a way that is trying to convince the reader of a certaion opinion, or in other words the use of biased language. You should also look for statements that you arent sure are correct based on the data you have from your training. You should present all your findings under three labels. These three labels are uncited sources (for statements that doesnt have cited sources), use of biased language (for statements that use biased language), dubious statement (for statements that contradict your knowledge).";
const textPrimer = "This is the text you shall review: ";

export async function local_aiReviewText(text: string): Promise<string | null> {
  const completion = await local_llm.chat.completions.create({
    messages:   [{ role: "system", content: initalPrompt },
                { role: "user", content: textPrimer + text }
    ],
    model: "TheBloke/Mistral-7B-Instruct-v0.2-GGUF",
  });
  return completion.choices[0].message.content;
}


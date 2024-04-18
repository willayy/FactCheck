import { NextResponse } from 'next/server';
import OpenAI from "openai";

/*
* This is a route posting a prompt to the local language model server provided by lm-studio.
* The returned response is the completion of the prompt. Ideally this would use the OpenAI API
* but since the api costs money and the local server is free, this is a good alternative for prototyping.
*/

const local_llm = new OpenAI({baseURL: "http://localhost:3001/v1", apiKey: "lm-studio"});
const initalPrompt = "You are an ai factchecking tool that reviews articles and looks for statements that arent supported by a cited source, statements that use emotional language or use language in a way that is trying to convince the reader of a certaion opinion, or in other words the use of biased language. You should also look for statements that you arent sure are correct based on the data you have from your training. You should present all your findings under three labels, and these three labels only. These three labels are, uncited sources (for statements that doesnt have cited sources), use of biased language (for statements that use biased language), dubious statement (for statements that contradict your knowledge).";
const textPrimer = "This is the text you shall review: ";

export async function POST(request: Request) {

    const { text: inputText } = await request.json();

    if (!inputText) {
        return NextResponse.json("Text not provided");
    }
    
    try {
        const completion = await local_llm.chat.completions.create({
            messages:   [{ role: "system", content: initalPrompt },
                        { role: "user", content: textPrimer + inputText }
            ],
            model: "TheBloke/Mistral-7B-Instruct-v0.2-GGUF",
          });
        const result = completion.choices[0].message.content;
        return NextResponse.json(result);
    } 
    catch (error) {
        return NextResponse.json("An error occured" + error);
    }
}
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

// const { openAIKey } = require('./config/keys.js');

const key = process.env.OPENAI_API_KEY

const openai = new OpenAI({ apiKey: key });

async function main() {
    const completion = await openai.chat.completions.create({
        // Authorization: 'Bearer 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', 
        messages: [{ role: "system", content: "You are a helpful assistant who takes a user supplied topic and level as input and generates a JSON output with 2 questions. Each question has a question, four possible options, a right answer, and an explanation of the right answer" }, {role: "user", content: "topic: redux, level, beginner"}],
        model: "gpt-3.5-turbo-1106",
        response_format: {type: "json_object"}
    }); 

    console.log(completion.choices[0]);
}

main();
// import OpenAI from "openai";
// import dotenv from "dotenv";

const OpenAI = require("openai");
const dotenv = require("dotenv");
dotenv.config();

const key = process.env.OPENAI_API_KEY

const openai = new OpenAI({ apiKey: key });

const getCoverImage = async (topic) => {
    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: `A picture describing topic ${topic}. use vector style  `,
        n: 1,
        size: "1024x1024",
        response_format: "url"
      });
      
}

async function main(topic, level) {
    const completion = await openai.chat.completions.create({ 
        messages: [{ role: "system", content: "You are a helpful assistant who takes a user supplied topic and proficiency level (beginner, intermediate or advanced) as input and generates a JSON output of a quiz made up of 10 questions. The quiz JSON output will have three keys.  The three keys are title, user and questionsArray.  You will create a title value and the value for the user key will be an empty string.  The questionsArray is where in the JSON output the 10 questions will be placed.  Under the questionsArray key, each question is an object with four keys.  The four keys are question, options, answer and response.  The response key will have a value of an empty string.  The options key's value is an array with four possible answers to the question from a through d.  All options must have a letter a through d.  The answer key's value will appear exactly as the correct option including both the letter from a through d and the description associated with it." }, {role: "user", content: `topic: ${topic}, level: ${level}`}],
        model: "gpt-3.5-turbo-1106",
        response_format: {type: "json_object"}
    }); 
    await getCoverImage(topic);

    return completion.choices[0]
}




main();

module.exports = {main}
import { OpenAI } from "langchain/llms/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";
import { ChatOpenAI } from "langchain/chat_models/openai";
import dotenv from "dotenv";
dotenv.config();

const chat = new ChatOpenAI({ temperature: 0.1 });
import type { NextApiRequest, NextApiResponse } from 'next'
import { generateSystemMessage } from "@/helper/generateSystemMessage";

type Data = {
    response: string

}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        const {
            name,
            description,
            personality,
            example,
            prompt
        } = req.body

        const systemMessage = generateSystemMessage({ name, description, personality, example, prompt })
        const response = await chat.call([
            new SystemChatMessage(systemMessage),
            new HumanChatMessage(
                prompt
            ),
        ]);
        const chatGPTResponse = response.text
        res.status(200).json({ response: chatGPTResponse })
        // Process a POST request
    } else {
        // Handle any other HTTP method
        res.status(200).json({ response: 'John Doe' })
    }


}

import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { AIRepository } from "../domain/ai.repository";
import OpenAI from "openai";

const openAI = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

const history: ChatCompletionMessageParam[] = [];

export class GPT3_5TurboRepository implements AIRepository {
  async answerTo(
    ...[props]: Parameters<AIRepository["answerTo"]>
  ): Promise<string> {
    const { message: content } = props;
    history.push({ role: "user", content });
    const completion = await openAI.chat.completions.create({
      messages: history,
      model: "gpt-3.5-turbo",
    });

    const answer = completion.choices[0].message.content || "";
    history.push({ role: "system", content: answer });

    return answer;
  }
}

import { AIController } from "../ai-controller";

const [answerTo] = ["answerTo"];

export const aiController: AIController = {
  answerTo: () => Promise.resolve(answerTo),
};

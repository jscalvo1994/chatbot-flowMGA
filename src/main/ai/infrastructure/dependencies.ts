import { AIController } from "./ai-controller";
import { GPT3_5TurboRepository } from "./gpt-3.5-turbo.repository";
//import { Llama3Repository } from "./llama-3.repository";

//const llama3Repository = new Llama3Repository();
const gpt3_5TurboRepository = new GPT3_5TurboRepository();
const currentRepository = gpt3_5TurboRepository;

export const aiController = new AIController({
  answerTo: currentRepository.answerTo,
});

import { AIRepository } from "../domain/ai.repository";
import { fileURLToPath } from "url";
import path from "path";
import {
  LlamaModel,
  LlamaContext,
  LlamaChatSession,
  LlamaChatPromptWrapper,
} from "node-llama-cpp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const model = new LlamaModel({
  modelPath: path.join(__dirname, "Meta-Llama-3-8B-Instruct-Q4_K_M.gguf"),
});

export class Llama3Repository implements AIRepository {
  private session: LlamaChatSession;

  constructor() {
    const { session } = this.initModel();
    this.session = session;
  }

  initModel() {
    const context = new LlamaContext({ model });
    const session = new LlamaChatSession({
      context,
      promptWrapper: new LlamaChatPromptWrapper(),
    });

    return {
      session,
    };
  }

  answerTo = async (
    ...[props]: Parameters<AIRepository["answerTo"]>
  ): Promise<string> => {
    const { message } = props;
    return await this.session.prompt(message);
  };
}

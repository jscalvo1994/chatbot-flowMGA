import { AIRepository } from "../domain/ai.repository";

export class AnswerTo {
  private aiRepository: AIRepository;

  constructor(props: { aiRepository: AIRepository }) {
    this.aiRepository = props.aiRepository;
  }

  async run(...args: Parameters<AIRepository["answerTo"]>): Promise<string> {
    return this.aiRepository.answerTo(...args);
  }
}

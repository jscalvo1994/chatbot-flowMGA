import { AIRepository } from "../domain/ai.repository";

export class AIController {
  answerTo: AIRepository["answerTo"];

  constructor(props: AIRepository) {
    this.answerTo = props.answerTo;
  }
}

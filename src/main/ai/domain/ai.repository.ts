export interface AIRepository {
  answerTo(props: { message: string }): Promise<string>;
}

export class MessageFormEntity {
  onSubmit?: (data: FormData) => Promise<void>;

  constructor({ onSubmit }: Partial<MessageFormEntity> = {}) {
    this.onSubmit = onSubmit ?? this.onSubmit;
  }
}

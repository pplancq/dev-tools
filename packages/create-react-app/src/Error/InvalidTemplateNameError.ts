export class InvalidTemplateNameError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidTemplateNameError';
  }
}

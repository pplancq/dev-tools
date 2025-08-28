export class InvalidProjectNameError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidProjectNameError';
  }
}

export class RunCommandError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RunCommandError';
  }
}

export class APiError extends Error {
  message;
  status;
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }

  static raiseError(message, status) {
    return new APiError(message, status);
  }
}

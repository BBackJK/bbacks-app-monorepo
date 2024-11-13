export class ResponseMessage {
  private data: Map<string, any>;
  private code: number;
  private message: string;
  private result: boolean;
  private timestamp: Date;

  constructor() {
    this.result = true;
    this.data = null;
    this.code = 200;
    this.message = null;
    this.timestamp = new Date();
  }

  public static ok(): ResponseMessage {
    return new ResponseMessage();
  }

  public static success(data: any): ResponseMessage {
    const message = new ResponseMessage();
    message.data = data;
    return message;
  }

  public static fail(code: number, errorReason: string): ResponseMessage {
    const message = new ResponseMessage();
    message.result = false;
    message.code = code;
    message.message = errorReason;
    return message;
  }

  public add(key: string, value: any): void {
    this.data.set(key, value);
  }
}

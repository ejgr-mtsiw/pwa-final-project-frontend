export enum MessageTypes {
    NONE,
    DANGER,
    INFO,
    SUCCESS,
    WARNING
}

export class Message {

    type: MessageTypes = MessageTypes.NONE;
    message: string = '';

    constructor(type: MessageTypes, message: string) {
        this.type = type;
        this.message = message;
    }
}

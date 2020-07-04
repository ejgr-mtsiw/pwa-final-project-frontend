export class Message {
    hidden: boolean = true;
    type: string = 'danger';
    message: string = '';

    constructor(hidden: boolean, type: string, message: string) {
        this.hidden = hidden;
        this.type = type;
        this.message = message;
    }
}

import { Message, MessageTypes } from './message';

describe('Message', () => {
  it('should create an instance', () => {
    expect(new Message(MessageTypes.NONE, '')).toBeTruthy();
  });
});

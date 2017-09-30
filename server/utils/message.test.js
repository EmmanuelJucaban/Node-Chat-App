const expect = require('expect');
const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Manny';
    var text = 'This is a test';

    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Test';
    var latitude = 1;
    var longitude = 1;
    var locationMessage = generateLocationMessage(from, latitude, longitude);
    var url = 'https://www.google.com/maps?q=1,1'
    expect(locationMessage).toMatchObject({from, url});
    expect(typeof locationMessage.createdAt).toBe('number');
  });
});

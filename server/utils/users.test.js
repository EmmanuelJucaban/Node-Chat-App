const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();

    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Test1'
    }, {
      id: '2',
      name: 'Lemur',
      room: 'Test2'
    }, {
      id: '3',
      name: 'Frank',
      room: 'Test1'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: 1,
      name: 'Test',
      room: 'Testing'
    }
    users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';

    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '4';
    var user = users.removeUser(userId);

    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '1';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '4';
    var user = users.getUser(userId);

    expect(user).toBeFalsy();
  });

  it('should return names for test 1', () => {
    var userList = users.getUserList('Test1');

    expect(userList).toEqual(['Mike', 'Frank']);
  });
});

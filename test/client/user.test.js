import {User} from '../../src/client/user';

test('creates a User without an init object', () => {
    let user = new User();
    expect(user).not.toBe(null);
});

test('creates a User with an init object', () => {
    let newUser = {firstName: 'John', lastName: 'Crosby'};
    let user = new User(newUser);
    expect(user.firstName).toBe(newUser.firstName);
    expect(user.lastName).toBe(newUser.lastName);
});

test('formats the user\'s name firstName lastName', () => {
    let newUser = {firstName: 'John', lastName: 'Crosby'};
    let user = new User(newUser);
    expect(user.formatName()).toBe(newUser.firstName + ' ' + newUser.lastName);
});

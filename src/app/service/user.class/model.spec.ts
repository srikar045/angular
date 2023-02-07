import { User } from './user.class/model';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });
});

import { createCipheriv } from 'crypto';
import { User } from './user.model';

export class UserBuilder {
  private cipherAlgorithm = 'aes-256-cbc';
  private cipherKey = Buffer.from(process.env.PASSWORD_KEY_SECRET);
  private initializationVector = Buffer.from(process.env.PASSWORD_VECTOR);

  private name: string;
  private username: string;
  private password: string;

  withName(name: string): UserBuilder {
    this.name = name;
    return this;
  }

  withUserName(username: string): UserBuilder {
    this.username = username;
    return this;
  }

  withPassword(password: string): UserBuilder {
    const cipher = createCipheriv(
      this.cipherAlgorithm,
      this.cipherKey,
      this.initializationVector,
    );

    let crypted = cipher.update(password, 'utf-8').toString();
    crypted += cipher.final('hex');

    this.password = crypted;
    return this;
  }

  build(): User {
    const customer = new User();
    if (this.name !== undefined) customer.name = this.name;
    if (this.username !== undefined) customer.username = this.username;
    if (this.password !== undefined) customer.password = this.password;

    return customer;
  }
}

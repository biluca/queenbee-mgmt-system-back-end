import { User } from './user.model';
export declare class UserBuilder {
    private cipherAlgorithm;
    private cipherKey;
    private initializationVector;
    private name;
    private username;
    private password;
    withName(name: string): UserBuilder;
    withUserName(username: string): UserBuilder;
    withPassword(password: string): UserBuilder;
    build(): User;
}

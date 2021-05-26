import { User } from './user';

export type LoginFormValues = Pick<User, 'username' | 'password'>;

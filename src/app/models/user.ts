export interface User extends LoginFormValues, RegisterFormValues {}

export interface LoginFormValues {
    username: string;
    password: string;
}

export interface RegisterFormValues {
    id: number;
    firstName: string;
    lastName: string;
    amount: number;
    adhar: number;
    createdAt: string;
    country: string;
}

export type Adhar = Pick<RegisterFormValues, 'adhar'>;

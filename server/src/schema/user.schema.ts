import {object, string, TypeOf} from 'zod'

export const createUserSchema = object({
    body: object({
        name : string({
            required_error: 'Name is required',
        }),
        password: string({
            required_error: 'Password is required',
        }).min(6, "password too short - should be 6 chars minimun"),

        passwordConfirmation: string({
            required_error: 'Password Confirmation is required',
        }),

        email: string({
            required_error: 'Email is required',
        }).email('Not e valid Email'),

    }).refine((data)=> data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ["passwordConfirmation"],
    }),
});


export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;
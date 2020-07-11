import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        name: 'Renato Silva',
        email: 'renato.moutinho@gmail.com',
        password: '123456',
        techs: ['Javascript', 'NodeJS', {title: 'HTML', experience: 100}]
    });

    return (response.json({message: "Hello World"}))
}
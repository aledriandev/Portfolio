import store from '../store/store'
import { database } from './firebase';

export function addMessage(email, subject, menssage) {
    const newcomment = {
        email: email,
        subject: subject,
        menssage: menssage
    };

    database.ref('menssages/').push(newcomment);
}
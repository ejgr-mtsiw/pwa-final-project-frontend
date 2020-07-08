import { Kit } from './kit';
import { User } from './user';

export interface Event {
    id: number;
    KitId: number;
    UserId: number;
    description: string;
    details: string;
    date: string;
    Kit?: Kit;
    User?: User;
}

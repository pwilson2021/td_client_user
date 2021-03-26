import {Order} from './order';

export interface Portfolio {
    name: string;
    id: number;
    orders: Order[];
    user_id: number;
}

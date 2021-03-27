import {Order} from './order';

export interface Portfolio {
    id: number;
    orders: Order[];
    user_id: number;
}

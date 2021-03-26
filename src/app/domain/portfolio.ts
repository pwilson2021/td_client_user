import {Order} from './order';

export interface Portfolio {
    name: string;
    id: number;
    orders: Order[];
}

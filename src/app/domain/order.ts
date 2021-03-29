import {Portfolio} from '../domain/portfolio';

export interface Order {
    id?: number;
    price?: number;
    quantity?: number;
    product?: string;
    order_type?: string;
    //order_value?: number;
    order_status?: string;
    portfolio?: any[];
    user_id?: number
}

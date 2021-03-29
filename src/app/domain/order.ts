import {Portfolio} from '../domain/portfolio';

export interface Order {
    //id: number;
    price: number;
    quantity: number;
    product_id: number;
    order_type: string;
    //order_value?: number;
    order_status: string;
    portfolio_id: number;
    user_id: number;
}

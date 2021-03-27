export interface MarketData {
    ticker: string;
    last_traded_price: number;
    bid_price: number;
    sell_limit: number;
    max_price_shift: number;
    ask_price: number;
    buy_limit: number;
}
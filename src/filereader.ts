import fs from 'fs'
import { Transaction, Stock } from './models'

export const getAllTransactions = () => {
    const transactionsData = fs.readFileSync('data/transactions.json', 'utf8');
    const transactions = JSON.parse(transactionsData);

    return transactions.map((t:any) => {

        return <Transaction> {
            sku: t.sku,
            type: t.type,
            qty: t.qty
        }
    })
}

export const getAllStock = () => {
    const stockData = fs.readFileSync('data/stock.json', 'utf8');
    const stocks = JSON.parse(stockData);

    return stocks.map((s: any) => {
        return <Stock> {
            sku: s.sku,
            stock: s.stock
        }
    })
}
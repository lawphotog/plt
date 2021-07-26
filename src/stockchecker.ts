import { calculateStock } from './calculator';
import { getAllTransactions } from './filereader';
import { Transaction } from './models';
import { TransactionType } from './transactionType';

const getTransactionsBySKU = (sku: string) => {
    return getAllTransactions().filter(function (item: Transaction) {
        return item.sku == sku
    })
}

const getTotalSold = (sku: string) => {

    const allSoldTransactions = getTransactionsBySKU(sku).filter(function (item: Transaction) {
        return item.type == TransactionType[TransactionType.order]
    })

    const qtySold = allSoldTransactions.map((item: Transaction) => item.qty)
    return qtySold.reduce((a: any, b: any) => a + b)
}

const getTotalRefund = (sku: string) => {
    const allRefundTransactions = getTransactionsBySKU(sku).filter(function (item: Transaction) {
        return item.type == TransactionType[TransactionType.refund]
    })

    const qtyRefund = allRefundTransactions.map((item: Transaction) => item.qty)
    return qtyRefund.reduce((a: any, b: any) => a + b)
}

export const getstock = async (sku: string): Promise<{sku: string, qty: number}> => {

    const transactionsBySKU = getTransactionsBySKU(sku)

    if(transactionsBySKU.length < 1) {
        throw ('sku not exist')
    }

    const finalStock = calculateStock(sku, getTotalRefund(sku), getTotalSold(sku))

    return {
        sku: sku,
        qty: finalStock
    };
}

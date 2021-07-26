import fs from 'fs'

const getAllTransactions = () => {
    const transactions = fs.readFileSync('data/transactions.json', 'utf8');
    return JSON.parse(transactions);
}

const getAllStock = () => {
    const stock = fs.readFileSync('data/stock.json', 'utf8');
    return JSON.parse(stock);
}

const getTransactionsBySKU = (sku: string) => {
    return getAllTransactions().filter(function (item: any) {
        return item.sku == sku
    })
}

const getStockQtyBySKU = (sku: string) => {
    const currentStockLevel = getAllStock().filter(function (item: any) {
        return item.sku == sku
    })

    return currentStockLevel[0].stock
}

const calculateStock = (sku: string, totalRefund: number, totalSold: number) => {

    let allStock = getStockQtyBySKU(sku) + totalRefund
    return allStock - totalSold
}

export const getstock = async (sku: string): Promise<{sku: string, qty: number}> => {

    let transactionsBySKU = getTransactionsBySKU(sku)

    if(transactionsBySKU.length < 1) {
        throw ('sku not exist')
    }

    let allSoldTransactions = transactionsBySKU.filter(function (item: any) {
        return item.type == 'order'
    })

    let qtySold = allSoldTransactions.map((item: any) => item.qty)
    let totalSold = qtySold.reduce((a: any, b: any) => a + b)

    let allRefundTransactions = transactionsBySKU.filter(function (item: any) {
        return item.type == 'refund'
    })

    let qtyRefund = allRefundTransactions.map((item: any) => item.qty)
    let totalRefund = qtyRefund.reduce((a: any, b: any) => a + b)

    let finalStock = calculateStock(sku, totalRefund, totalSold)

    return {
        sku: sku,
        qty: finalStock
    };
}
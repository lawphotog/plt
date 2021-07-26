
import { getAllStock } from './filereader';
import { Stock } from './models';

const getStockQtyBySKU = (sku: string) => {
    const currentStockLevel = getAllStock().filter(function (item: Stock) {
        return item.sku == sku
    })

    if(currentStockLevel.length < 1) {
        return 0
    } else {
        return currentStockLevel[0].stock
    }
}

export const calculateStock = (sku: string, totalRefund: number, totalSold: number) => {

    const allStock = getStockQtyBySKU(sku) + totalRefund
    return allStock - totalSold
}
import { createSelector } from 'reselect'

export const selectOrders = state => state.orders.orders;
export const selectStatusFilterValue = state => state.orders.statusFilterValue;
export const selectSupplierFilterValue = state => state.orders.supplierFilterValue;

export const selectSuppliers = createSelector(
    [selectOrders],
    suppliers => [...new Set(suppliers.map(supplier => supplier.vendorName))]
)

export const selectOrderStatus = createSelector(
    [selectOrders],
    orderBuyerStatus => [...new Set(orderBuyerStatus.map(order => order.orderBuyerStatus))]
)
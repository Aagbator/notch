import { createSelector } from 'reselect'

export const selectOrders = state => state.orders.orders;
export const selectStatusFilterValue = state => state.orders.statusFilterValue;
export const selectSupplierFilterValue = state => state.orders.supplierFilterValue;

//state.filteredOrders = state.orders 

export const selectSuppliers = createSelector(
    [selectOrders],
    suppliers => [...new Set(suppliers.map(supplier => supplier.vendorName))]
)

export const selectOrderStatus = createSelector(
    [selectOrders],
    orderBuyerStatus => [...new Set(orderBuyerStatus.map(order => order.orderBuyerStatus))]
)

export const selectFilteredOrders = state => {
  const statusFilterValue = selectStatusFilterValue(state);
  const supplierFilterValue = selectSupplierFilterValue(state);
  const orders = selectOrders(state);
  
  if ((!statusFilterValue || !supplierFilterValue) 
   && (statusFilterValue === 'ALL' || statusFilterValue === 'ALL')) {
    return orders;
  }

  const filteredOrders = Object.values(orders).filter(order => order.orderBuyerStatus === statusFilterValue)
  return filteredOrders;
}

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    orders: [],
    statusFilterValue: 'ALL',
    supplierFilterValue: 'ALL',
    isFetchingOrders: false
}

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        receiveOrders(state, action) {
            state.orders =  action.payload
        },
        setSupplierFilter(state, action) {
            state.supplierFilterValue = action.payload
        },
        setStatusFilter(state, action) {
            state.statusFilterValue = action.payload
        },
        isFetchingOrder(state, action) {
            state.isFetchingOrders = action.payload
        }
    }
});

export const { receiveOrders, setSupplierFilter, setStatusFilter, isFetchingOrder } = orderSlice.actions;
export default orderSlice.reducer;


export const getOrdersAsync = () => dispatch => {
    dispatch(isFetchingOrder(true))
    axios.post('http://api.interview.staging.foodieorders.com/v3/orders/search', {})
    .then(response => {
        const {data} = response.data;
        dispatch(receiveOrders(data));
        dispatch(isFetchingOrder(false));
    })
};


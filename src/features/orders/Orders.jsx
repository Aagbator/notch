import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrdersAsync, setStatusFilter, setSupplierFilter } from './ordersSlice';
import { selectSuppliers, selectOrders, selectOrderStatus } from './Orders.selector';
import { Header } from '../../components/header/Header';
import { Button } from '../../components/button/Button';
import { Badge } from '../../components/badge/Badge';
import { SelectInput } from '../../components/select-input/SelectInput';
import { Banner, FormWrapper, SelectWrapper, Mainsection, Table, 
  TableHeader, TableRow , TableCol, Loader, Spinner} from './Orders.styles';
import { formatDate } from '../../utils/DateUtils';

export const Orders = () => {

  const ordersData = useSelector((state) => selectOrders(state));
  const orderSuppliers = useSelector((state) => selectSuppliers(state));
  const orderStatus = useSelector((state) => selectOrderStatus(state));
  const isFetchingOrders = useSelector((state) => state.orders.isFetchingOrders);
  const orderStatusFilter = useSelector((state) => state.orders.statusFilterValue);
  const orderSupplierFilter = useSelector((state) => state.orders.supplierFilterValue);
  
  let supplierOptions = [{name: 'All Supliers', value: 'ALL'}];
  supplierOptions.push(...orderSuppliers.map(supplier =>  Object.assign({}, {name: supplier, value: supplier})));

  let orderBuyerStatusOptions = [{name: 'All', value: 'ALL'}];
  orderBuyerStatusOptions.push(...orderStatus.map(status =>  Object.assign({}, {name: status, value: status})));

  const dispatch = useDispatch()  ;
  
  useEffect(() => {
    dispatch(getOrdersAsync());
  }, [dispatch])

  const getOrderStatusBadge = (orderStatus) => {
    const status = orderStatus ? orderStatus.toLowerCase() : '';
    let variant = '';

    switch(status){
      case 'paid':
       variant = 'success';
      break;
      case 'delivered':
       variant = 'primary';
      break;
      case 'in shopping cart':
      variant = 'warning';
      break;
      default:
      variant = 'warning';
    }
    return (<Badge style={{marginLeft: '.5rem'}} variant={variant} rounded={true}>{orderStatus}</Badge>)
  }

  const resetAllFilterStatus = () => {
    dispatch(setStatusFilter('ALL'));
    dispatch(setSupplierFilter('ALL'));
  }

  const filterOrderByStatus = (e) => {
    const value = e.target.value;
    dispatch(setStatusFilter(value));
  }

  const filterOrderBySupplier = (e) => {
    const value = e.target.value;
    dispatch(setSupplierFilter(value));
  }

  const filterOrders = orders => {
    const statusFilter = orderStatusFilter;
    const supplierFilter = orderSupplierFilter;
    

    const filteredOrders = orders.filter((order) => {
      if (statusFilter === 'ALL' && supplierFilter === 'ALL'){
        return true;
      }

      if (order['orderBuyerStatus'] === statusFilter 
      && order['vendorName'] === supplierFilter){
        return true;
      }

      if (supplierFilter === 'ALL' && order['orderBuyerStatus'] ===  statusFilter){
        return true;
      }

      if (order['vendorName'] === supplierFilter && statusFilter === 'ALL'){
        return true;
      }
      return false;
    });

    return filteredOrders;
    
  }


  return (
    <>
     { isFetchingOrders ?
      <Loader>
        <Spinner />
        <span>Loading Orders, please wait...</span>
      </Loader>
      :
      <>
        <Header variant="primary" />
        <Banner>
            <FormWrapper>
              <SelectWrapper>
                <SelectInput 
                  onChange={filterOrderBySupplier} 
                  value={orderSupplierFilter} 
                  data={supplierOptions} 
                  label="supplier" />
              </SelectWrapper>
              <SelectWrapper>
                <SelectInput 
                  onChange={filterOrderByStatus} 
                  value={orderStatusFilter} 
                  data={orderBuyerStatusOptions} 
                  label="order status" />
              </SelectWrapper>
              <Button variant="dark" icon="close" onClick={resetAllFilterStatus}>Reset Filters</Button>
            </FormWrapper>
        </Banner>

        <Mainsection>
          <Table role="presentation">
            <TableHeader role="rowheader">
              <TableCol width={10} role="cell">Status</TableCol>
              <TableCol width={20} role="cell">Delivery Day</TableCol>
              <TableCol width={50} role="cell">Supplier</TableCol>
              <TableCol width={10} role="cell">Total</TableCol>
            </TableHeader>
            { ordersData && ordersData.length > 0 ?
               filterOrders(ordersData).map(({
                 orderBuyerStatus, 
                 deliveryDay, 
                 isPendingVendorOnboarding, 
                 isBYOS,
                 vendorName, total}, idx) => 
                <TableRow key={idx} role="rowheader">
                  <TableCol width={10} role="cell" data-label="Status">
                   { getOrderStatusBadge(orderBuyerStatus) }
                  </TableCol>
                  <TableCol width={20} role="cell" data-label="Delivery Day">{formatDate(deliveryDay)}</TableCol>
                  <TableCol width={50} role="cell" data-label="Supplier">
                    {vendorName}
                    {isPendingVendorOnboarding && (<Badge style={{marginLeft: '.5rem'}} variant='warning' rounded={true}>1st</Badge>)}
                    {isBYOS && (<Badge style={{marginLeft: '.5rem'}} variant='dark'>MARKET</Badge>)}
                  </TableCol>
                  <TableCol width={10} role="cell" data-label="Total">{total ? total : ''}</TableCol>
                </TableRow>
               )
            : (<p>No data available</p>) 
            }
          </Table>
        </Mainsection>
      </>
    }
    </>
  )
};

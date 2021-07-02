import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../../components/header/Header';
import { Button } from '../../components/button/Button';
import { Badge } from '../../components/badge/Badge';
import { SelectInput } from '../../components/select-input/SelectInput';
import { Banner, FormWrapper, SelectWrapper, Mainsection, Table, 
  TableHeader, TableRow , TableCol} from './Home.styles';

export const Home = () => (
  <>
    <Header variant="primary" />
    <Banner>
        <FormWrapper>
          <SelectWrapper>
            <SelectInput label="supplier" />
          </SelectWrapper>
          <SelectWrapper>
            <SelectInput label="order status" />
          </SelectWrapper>
          <Button variant="dark" icon="close" onClick={() => alert(44)}>Reset Filters</Button>
        </FormWrapper>
    </Banner>

    <Mainsection>
      <Table role="presentation">
        <TableHeader role="rowheader">
          <TableCol width={10} role="cell">Status</TableCol>
          <TableCol width={20} role="cell">Delivery Day</TableCol>
          <TableCol width={40} role="cell">Supplier</TableCol>
          <TableCol width={20} role="cell">Total</TableCol>
        </TableHeader>
        <TableRow role="rowheader">
          <TableCol width={10} role="cell" data-label="Status">
            <Badge style={{marginLeft: '.5rem'}} variant='success' rounded={true}>PAID</Badge>
          </TableCol>
          <TableCol width={20} role="cell" data-label="Delivery Day">John Doe</TableCol>
          <TableCol width={40} role="cell" data-label="Supplier">
            D & D Poultry Limited
            <Badge style={{marginLeft: '.5rem'}} variant='dark'>MARKET</Badge>
            <Badge style={{marginLeft: '.5rem'}} variant='warning' rounded={true}>1st</Badge>
          </TableCol>
          <TableCol width={20} role="cell" data-label="Total">Pending</TableCol>
        </TableRow>
        <TableRow role="rowheader">
          <TableCol width={10} role="cell" data-label="Status">
          <Badge variant='primary' rounded={true}>DELIVERED</Badge>
          </TableCol>
          <TableCol width={20} role="cell" data-label="Delivery Day">John Doe</TableCol>
          <TableCol width={40} role="cell" data-label="Supplier">$350</TableCol>
          <TableCol width={20} role="cell" data-label="Total">Pending</TableCol>
        </TableRow>
      </Table>
    </Mainsection>
  </>
);
Home.propTypes = {
  user: PropTypes.shape({}),
};

Home.defaultProps = {
  user: null,
};

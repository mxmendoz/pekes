import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/Header';
import EditCustomerMain from '../components/customers/EditcustomerMain';
// import products from "./../data/Products";

const CustomerEditScreen = ({ match }) => {
  const customerId = match.params.id;
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <EditCustomerMain customerId={customerId} />
      </main>
    </>
  );
};
export default CustomerEditScreen;

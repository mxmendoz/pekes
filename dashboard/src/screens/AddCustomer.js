import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/Header';
import AddCustomerMain from '../components/customers/AddCustomerMain';

const AddCustomer = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <AddCustomerMain />
      </main>
    </>
  );
};

export default AddCustomer;

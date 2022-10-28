import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/Header';
import AddSupplierMain from '../components/supplier/AddSupplierMain';

const AddSupplier = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <AddSupplierMain />
      </main>
    </>
  );
};

export default AddSupplier;

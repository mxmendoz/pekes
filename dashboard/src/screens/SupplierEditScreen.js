import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/Header';
import EditSupplierMain from '../components/supplier/EditsupplierMain';
// import products from "./../data/Products";

const SupplierEditScreen = ({ match }) => {
  const supplierId = match.params.id;
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <EditSupplierMain supplierId={supplierId} />
      </main>
    </>
  );
};
export default SupplierEditScreen;

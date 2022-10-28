import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/Header';
import AddCategoryMain from '../components/categories/AddCategoryMain';

const AddCategory = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <AddCategoryMain />
      </main>
    </>
  );
};

export default AddCategory;

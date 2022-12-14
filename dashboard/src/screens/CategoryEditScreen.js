import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/Header';
import EditCategoryMain from '../components/categories/EditcategoryMain';
// import products from "./../data/Products";

const CategoryEditScreen = ({ match }) => {
  const categoryId = match.params.id;
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <EditCategoryMain categoryId={categoryId} />
      </main>
    </>
  );
};
export default CategoryEditScreen;

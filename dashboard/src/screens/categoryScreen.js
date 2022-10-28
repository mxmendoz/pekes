import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/Header';
import MainCategories from '../components/categories/MainCategories';

const CategoryScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MainCategories />
      </main>
    </>
  );
};

export default CategoryScreen;

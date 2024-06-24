import React from 'react';
import Navbar from './components/Navbar';
import Matrimony from './components/matrimony/Matrimony';
import CreateBiodata from './components/createbiodata/CreateBiodata';
import Dashboard from './components/dashboard/Dashboard';
import CustomerReviews from './components/CustomerReviews/CustomerReviews';
import Footer from './components/footer/Footer';
import './App.css';



const App = () =>{
  return (
    <>
     <Navbar />
     <Matrimony />
     <CreateBiodata />
     <Dashboard />
     <CustomerReviews />
     <Footer />
     

    </>
  )
}
  export default App
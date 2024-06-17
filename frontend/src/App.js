import React from "react";
import Header from "./components/Header";
import CreateUser from "./components/CreateUser";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './components/Home';

import './App.css';
import homeStyle from "./Style/homeStyle.css";
import moreDetails from "./components/moreDetails";
import aboutUs from "./components/aboutUs";
import AddDetails from "./components/AddDetails";
import Login from "./components/Login";
import CreateItem from "./components/CreateItenm";

function App() {
  return ( 
    <Router>
      <div>
        <Header/>

        

        <Routes>
          <Route path="/home" exact Component={Home}></Route>
          <Route path ="/create" exact Component={CreateUser}/>
          <Route path ="/details" exact Component={moreDetails}/>
          <Route path ="/aboutus" exact Component={aboutUs}/>
          <Route path="/place-order" exact Component={AddDetails}/>
          <Route path="/login" exact Component={Login}/>
          <Route path="/admin-add-item" exact Component={CreateItem}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

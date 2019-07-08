import React from 'react';
import './App.css';
import User from './component';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header';
import 'font-awesome/css/font-awesome.min.css';



function App() {
  return (
    <div className="App">
        <Header/>
        <User/>  
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import About from './Component/About'
import CounterClass from "./Component/CounterClass"
import CounterFunc from './Component/CounterFunc';
import ListProduct from './Component/ListProduct';
import TextInput from './Component/TextInput';

// import logo from './logo.svg';
import './App.css';

// Function component
function App() {
  return (
    <div className="App">
      <TextInput />
      <Home name="Alpha" />

      <ListProduct />

      <About 
        name="Auzan" 
        email="auzanassidqi@gmail.com"
        age={20}
      />

      <CounterClass />
      <CounterFunc />
      

    </div>
  );
}

// stateless Component
class Home extends Component{
  render(){
    return(
      <h1>Hallo selamat datang {this.props.name}</h1>
    )
  }
}

export default App;

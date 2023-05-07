import './App.css';
import Sample from './Sample';
import Test from './Test';
import Counter from './Counter';
import { useState } from 'react';


function App() {

   var [data,setData]=useState("heyy you!!!")
  return (
    <div className="App">
     <Counter sdata={data}/>
      
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import ClassA from './Components/ClassA/ClassA';
import { createContext, useState } from 'react';
import ClassB from './Components/ClassB/ClassB';

export const classContext = createContext();


function App() {
  const [count, setCount] = useState('mobile')
  return (
    
    <classContext.Provider value={[count ,setCount]}>
        <ClassA></ClassA>
        <ClassB></ClassB>
    </classContext.Provider>
    
  );
}

export default App;

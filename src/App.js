import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Toughlove from './pages/Toughlove';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Toughlove/>}/>  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

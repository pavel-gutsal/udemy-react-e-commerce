import './App.css';
import {Routes , Route } from 'react-router-dom';
import { Fragment } from 'react';
import Navigation from './routerPages/navigation/navigation'
import Home from './routerPages/home/home'
import ContuctUs from './routerPages/contuct/contuctUs';
import SignIn from './routerPages/SignIn/SignIn';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='Contuct' element={<ContuctUs/>}/>
        <Route path='Sign-In' element={<SignIn/>}/>
      </Route>
    </Routes>
  );
}

export default App;

// return (
//   <Fragment>
//     <Navigation/>
//     <Home/>
//     <ContuctUs/>
//   </Fragment>
  
// );
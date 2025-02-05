import React from 'react';
import './mainPage.scss';
import { ChakraProvider } from '@chakra-ui/react';
import { Demo } from './boxGridUsers';

//import logo from '../images/assets/Logo.png';
//import logo from '../images/assets/Logo';

export const MainPage = () => {
return  (

        <> 
    <div className='bodyMain'>
      <header className="header">
      <div class="content">
    <div class="corner top-left"></div>
    <div class="corner bottom-right"></div>
    <div  class="logo"> FINAL TASK </div>
  </div>

     <nav className="nav-buttons">
    <button className="btn">Users</button>
   <button className="btn">Sign-Up</button>
  </nav>
      </header>
    
      <main>
        <div className="main">
        <div className="blockText">
      <div className="mainText">Your centered text here</div>
      <button className="btn">Sign-Up</button>
      </div>
      </div>
      <div className='whiteLine'></div>
      <div className="usersBlock">

       <Demo /> 

      </div>

      </main>
      </div>
      </>        
  );

}
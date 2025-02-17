
import './mainPage.scss';
import React, { useState, useEffect, useRef } from 'react';
//import { ChakraProvider } from '@chakra-ui/react';
import { Demo } from './boxGridUsers';
import { ListOfMembers } from '../service/ListOfMembers';
import { CSSReset, Box } from "@chakra-ui/react";
import HookForm from '../service/HookForm';




export const MainPage = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const teamRef = useRef(null);
  const signRef = useRef(null);

  const handleSignUpClick = () => {
    // Прокручуємо до елемента з потрібним заголовком
    if (signRef.current) {
      signRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  const handleTeamClick = () => {
    // Прокручуємо до елемента з потрібним заголовком
    if (teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let textToDisplay;
  if (screenWidth < 1170) {
    textToDisplay = "MAIN TITLE";
  } else {
    textToDisplay = "Test assignment for front-end developer";
  }

return  (

        <> 
    <div className='bodyMain'>
      <header className="header">
      <div className="content">
    <div className="corner top-left"></div>
    <div className="corner bottom-right"></div>
    <div  className="logo"> FINAL TASK </div>
  </div>

     <nav className="nav-buttons">
    <button className="btn" onClick={handleTeamClick}>Users</button>
   <button className="btn" onClick={handleSignUpClick}>Sign-Up</button>
  </nav>
      </header>
    
      <main>
        <div className="main">
        <div className="blockText">
      <div className="mainText">
     
      {textToDisplay}
     
      </div>      
      <button className="btn" onClick={handleSignUpClick}>Sign-Up</button>
      </div>
      </div>
      <div className='whiteLine'></div>
      <div className="usersBlock" ref={teamRef}>
      <div className='whiteLine'></div>
        <div>  <h2>Team static members</h2></div>
        <div className='whiteLine'></div>
       <Demo /> 
  
      </div>
       <div className="logo">
        <ListOfMembers />
       </div>
       <div className="upload-container">
       
        <div className="upload-container-lock" ref={signRef}>
        <div> <h2>Working with POST request</h2></div>
           <Box p={4}>
        <HookForm />
      </Box> 
      </div>
      </div>
      </main>
      </div>
      </>        
  );

}
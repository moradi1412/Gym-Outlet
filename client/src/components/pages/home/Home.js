import React from 'react';
import { Button } from './button';



function Home() {
    return (
        <div className='hero-container'>
           <h1>TRAIN IN STYLE</h1>
           <p>Shop the collection</p>
           <div className='hero-btns'>
               <Button 
               className='btns'
               buttonsStyle='btn--outline'
               buttonSize='btn--large'
               >
                Men   
               </Button>
               <Button 
               className='btns'
               buttonsStyle='btn--outline'
               buttonSize='btn--large'
               >
                Women  
               </Button>
           </div>
        </div>
    );
}

export default Home;
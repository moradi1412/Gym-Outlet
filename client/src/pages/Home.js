import React from 'react';
import { Button } from '../../src/pages/Home/button';
import Cards from '../pages/Home/card'

function Home() {
    return (
        <>
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
               buttonsStyle='btn--primary'
               buttonSize='btn--large'
               >
                Women  
               </Button>
           </div>
        </div>
        <div className="homeCard">
        <Cards />
        </div>
        
        </>
    );
}

export default Home;
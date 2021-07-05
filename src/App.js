import React, {useState} from 'react';
import './style.css'

import Button from './components/Button'
 
export default function App(){

  return(
    <div className="container">
      <img src={require('./assets/biscoito.png')}/>

      <Button nome="Abrir Biscoito"/>
      
    </div>
  )
}


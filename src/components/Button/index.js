import React, {useState} from 'react';

 
export default function Button({nome}){

  const [frases, setFrases] = useState(["A amizade desenvolve a felicidade e reduz o sofrimento",
  "Imagine uma nova história para sua vida e acredite nela.",
  "Não existe um caminho para a felicidade. A felicidade é o caminho.",
  "Ser feliz sem motivo é a mais autêntica forma de felicidade."] )

  const [textoFrase, setTextoFrase] = useState('teste')


  function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextoFrase(frases[numeroAleatorio])
  }

  return(
    <div>
      <button onClick={quebraBiscoito}> {nome} </button>
      <h3> {textoFrase}</h3>
    </div>
  )
}


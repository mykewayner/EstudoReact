import React, { useState } from 'react';
import './styles.css'

import { Card } from '../../components/Card'

function Home() {
  const [studentName, setStudentName] = useState();
  return (
    <>
      <div className="container">
      <h1>Lista de Presença</h1>
      <h1>Nome: {studentName}</h1>

      <input type="text" placeholder="Digite o nome..." onChange={e => setStudentName(e.target.value)}/>
       <button type="button">Adicionar</button>

       <Card name="Rodrigo" time="10:25:23" />
       <Card name="João" time="12:25:23" />
      </div>    
    </>
  )
}

export default Home

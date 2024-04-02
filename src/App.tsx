import React from 'react';
import Cabecalho from './components/cabecalho/cabecalho';
import ContatosList from './components/contato/contato-list';
import ContatoForm from './components/novo-contato/formulario';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path='/contatos'element = {<ContatosList />} />
          <Route path="/contatos/novo" element={ <ContatoForm onAddContato={() => {}} /> } />
        </Routes>
      </Router>
    </div>
  
  );
}

export default App;

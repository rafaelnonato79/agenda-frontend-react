import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Importe o componente Link para criar links de navegação
import { Contato } from '../../models/contato';

const ContatosList: React.FC = () => {
  const [contatos, setContatos] = useState<Contato[]>([]);

  useEffect(() => {
    const fetchContatos = async () => {
      try {
        const response = await axios.get('http://localhost:8080/contatos');
        setContatos(response.data);
      } catch (error) {
        console.error('Houve um erro ao buscar os contatos:', error);
      }
    };

    fetchContatos();
  }, []);

  return (
    <div className="accordion mt-5" id="accordionExample">
      {contatos.map(contato => (
        <div className="accordion-item" key={contato.id}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target={`#collapse${contato.id}`} aria-expanded="false"
                    aria-controls={`#collapse${contato.id}`}>
              <span>
                {contato.id} - {contato.nome}
              </span>
              <span>
                <Link to={`/novo-contato/${contato.id}`}>
                  <i className="bi bi-pencil-square"></i>
                </Link>
              </span>
            </button>
          </h2>
          <div id={`collapse${contato.id}`} className="accordion-collapse collapse"
               data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>
                Nome: {contato.nome}<br/>
                Fone: {contato.fone.numero} <br/>
                Tipo: {contato.fone.tipoFone}
                <Link to={`/contatos/${contato.id}`} className ='btn btn-primary'>
              </p>
              <div>{contato.endereco.logradouro}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContatosList;

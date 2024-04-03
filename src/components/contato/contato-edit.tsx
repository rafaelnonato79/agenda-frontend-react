import React, { useEffect, useState } from "react";
import axios from "axios";

import { Contato } from "../../models/contato";
import { useNavigate } from "react-router-dom";

type Props = {
    onAddContato: (contato: Contato) => void;
}

const ContatoEdit: React.FC<Props> = ({ onAddContato }) => {


    const navigate = useNavigate()

    const {id} = useParams<{id: string}>();
    const [contato, setContato] = useState<Contato | null>(null);


    useEffect(()=>{
        const fetchContato = async()=>{
            const response = await axios.get(`http://localhost:8080/contatos/${id}`);
            setContato(response.data);
        };
        fetchContato();
    },[id]);

    
    const handleSubmit = async (evento: React.FormEvent) => {
        evento.preventDefault()
        
        try {
            const resposta = await axios.put('http://localhost:8080/contatos', contato);
            navigate('/contatos');
        } catch (error) {
            console.error('Houve um erro ao salvar o contato:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setContato({
            ...contato, [name]: value
        }as Contato);
    }



    return (
        <form onSubmit={handleChange}>
            <div className="form-group mb-3">
                <label htmlFor="nome">Nome</label>
                <input
                    type="text"
                    className="form-control"
                    id="nome"
                    value={contato?.nome}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={contato?.email}
                    onChange={(evento) => setEmail(evento.target.value)}    
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="numeroFone">Número do Telefone</label>
                <input
                    type="text"
                    className="form-control"
                    id="numeroFone"
                    value={numeroFone}
                    onChange={(evento) => setNumeroFone(evento.target.value)}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="tipoFone">Tipo do Telefone</label>
                <select id="tipoFone" className="form-select" onChange={(evento) => setTipoFone(evento.target.value)}>
                    <option value="CELULAR">Celular</option>
                    <option value="RESIDENCIAL">Residencial</option>
                    <option value="COMERCIAL">Comercial</option>
                </select>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="logradouro">Logradouro</label>
                <input
                    type="text"
                    className="form-control"
                    id="logradouro"
                    value={logradouro}
                    onChange={(evento) => setLogradouro(evento.target.value)}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="numeroEndereco">Número do Endereço</label>
                <input
                    type="text"
                    className="form-control"
                    id="numeroEndereco"
                    value={numeroEndereco}
                    onChange={(evento) => setNumeroEndereco(evento.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Salvar
            </button>
        </form>
    );

}

export default ContatoForm;
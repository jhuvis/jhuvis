import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import track from './track.png';
import axios from 'axios';
import { ThreeDots } from  'react-loader-spinner'

export default function Signin()
{
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");

    const [cadastrar, setCadastrar] = useState("Cadastrar");
    const [carrega, setCarregar] = useState("none");

function finalizar(event)
{

    event.preventDefault();
    setCarregar("");
    setCadastrar("");
        
    const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", 
    {
		email: email,
	    name: nome,
	    image: foto,
	    password: senha
	});

    requisicao.then(() => 
    {
        navigate("/",
        {
            replace: false,
        })

        setFoto("");
        setNome("");
        setEmail("");
        setSenha("");

    });

    requisicao.catch(() => {
        alert("algo deu errado");
        setCadastrar("Cadastrar");
        setCarregar("none");

    })

}

    return(
        <Inicio>
        <img src={track}/>
        <Form onSubmit={finalizar}>
         <div><Input
            type="email"
            id="email"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            disabled={!carrega}
            required
          /></div> 
          <div><Input
            type="password"
            id="password"
            value={senha}
            placeholder="senha"
            onChange={(e) => setSenha(e.target.value)}
            disabled={!carrega}
            required
          /></div>
         <div><Input
            type="text"
            id="nome"
            value={nome}
            placeholder="nome"
            onChange={(e) => setNome(e.target.value)}
            disabled={!carrega}
            required
          /></div> 
          <div><Input
            type="url"
            id="url"
            value={foto}
            placeholder="foto"
            onChange={(e) => setFoto(e.target.value)}
            disabled={!carrega}
            required
          /></div>  
          <Buttom type="submit" disabled={!carrega}>
            {cadastrar} 
            <div className={carrega}><ThreeDots color="#FFFFFF" height={80} width={80} /></div>
          </Buttom>
        </Form>
        <Link to={"/"}>Já tem uma conta? Faça login!</Link>
        
        </Inicio>
    );
}

const Inicio = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 10%;
`;

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    div{
      margin-bottom: 10px;
    }

`;

const Buttom = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px;
    padding: 10px;

    width: 303px;
    height: 45px;

    background: #52B6FF;
    border: none;
    border-radius: 4.63636px;
    font-size: 20.976px;
    color: #FFFFFF;
    div{
        margin-top: 9px;
    }
    
`;

const Input = styled.input`
width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
`;
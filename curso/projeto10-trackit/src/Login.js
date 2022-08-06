import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { ThreeDots } from  'react-loader-spinner'
import "./style.css";
import track from './track.png';

export default function Login()
{
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [cadastrar, setCadastrar] = useState("Entrar");
  const [carrega, setCarregar] = useState("none");

  function finalizar(event)
  {
  
      event.preventDefault();
      setCarregar("");
      setCadastrar("");
          
      const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", 
      {
        email: email,
        password: senha
      });
  
      requisicao.then((res) => {navigate("/habitos",
      {
        replace: false,
        state: {
        id : res.data.id,
        name : res.data.name,
        image : res.data.image,
        email : res.data.email,
        token : res.data.token,
      },
      })
  
      setEmail("");
      setSenha("");
  
    });
  
      requisicao.catch(() => {
          alert("algo deu errado");
          setCadastrar("Entrar");
          setCarregar("none");
  
      })
  
  }

    return(
        <Inicio>
        <img src={track}/>
        <Form onSubmit={finalizar}>
        <label htmlFor="email"></label>
         <div><Input
            type="email"
            id="email"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            disabled={!carrega}
            required
          /></div> 
          <label htmlFor="senha"></label>
          <div><Input
            type="password"
            id="password"
            value={senha}
            placeholder="senha"
            onChange={(e) => setSenha(e.target.value)}
            disabled={!carrega}
            required
          /></div> 
          <Buttom type="submit" disabled={!carrega}>
              {cadastrar} 
              <div className={carrega}><ThreeDots color="#FFFFFF" height={80} width={80} /></div>   
          </Buttom>
        </Form>
        <Link to={"/cadastro"}>Não tem uma conta? Cadastre-se!</Link>
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
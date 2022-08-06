import { useState } from "react";
import styled from 'styled-components';

let cin = "#DBDBDB";
let branco = "#FFFFFF";

export default function Dia(props)
{
    const {dia, index, semana, desativa, cinza} = {...props};

    if(cinza === true)
    {
        cin = "#FFFFFF";
        branco = "#DBDBDB";
    }
    else
    {
        cin = "#DBDBDB";
        branco = "#FFFFFF";
    }

    const [cor, setCor] = useState(cin);
    const [back, setBack] = useState(branco);

   
    
  
    
    function toma()
    {
        console.log(desativa);
        if(back === "#FFFFFF")
        {
            setBack("#DBDBDB");
            setCor("#FFFFFF");
            semana(index);
        }
        else
        {
            setBack("#FFFFFF");
            setCor("#DBDBDB");
            semana(index);
        }
    }

    return(
        <Botao disabled={desativa} core={cor} back={back} onClick={() => toma()}>
            {dia}
        </Botao>

    );
}


const Botao = styled.button`

    display: flex;
    align-items: center;
    justify-content: center;

  background: ${props => props.back};
  color: ${props => props.core};

  border: 1px solid #D5D5D5;
  border-radius: 5px;

  width: 30px;
  height: 30px;

  margin: 2px; 
  
  font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
`;
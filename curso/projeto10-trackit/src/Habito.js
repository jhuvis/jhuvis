import { useState } from "react";
import styled from 'styled-components';
import Dia from "./Dia";
import lixo from "./lixo.png"
import axios from 'axios';

export default function Habito(props)
{
    const {name, days, semana, id, config} = {...props};
    const [dias, setDias] = useState(["D", "S", "T", "Q", "Q", "S", "S"]);

    function ecinza(index)
    {
        for(let i = 0; i < days.length; i++)
        {
          if(days[i] === index)
          {
            return true;
          }
        }
        return false;
    }

    function deleta()
    {
        const requisicao = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);

        requisicao.then(() => 
    {
        window.location.reload();  
    });

    requisicao.catch(() => {
        alert("algo deu errado");
    })
    }

    return(
        <div className="criando">
        <Lixo><p>{name}</p><img onClick={deleta} src={lixo}></img></Lixo>
        
        
        <Dias>
        {dias.map((d, index) => <Dia
                                dia={d}
                                index={index}
                                semana={semana}
                                desativa={true}
                                cinza = {ecinza(index)}
                                key={index} />)}
        </Dias>
        </div>
    );
}

const Lixo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;

const Dias = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 5px;

`;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import styled from 'styled-components';
import Login from './Login'
import Signin from "./Signin";
import Habitos from "./Habitos";

export default function App() {
    
    return (
        <>
            <Body>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Signin />} />
                    <Route path="/habitos" element={<Habitos />} />
                </Routes>
            </BrowserRouter>
            </Body>
        </>
    );
  }

  const Body = styled.div`
    display: flex;
    flex-direction: column;
`;
  
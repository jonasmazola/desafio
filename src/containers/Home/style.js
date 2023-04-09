import styled from 'styled-components'
import Background from '../../img/fundo.png'

export const Container = styled.div `
background: url("${Background}");
background-size: cover;
display: flex;
margin:0 auto;
flex-direction: column;
align-items: center;
gap: 44px;
height:100vh;
width: 414px;


`

export const Imagem = styled.img `
margin: 11px 36px 10px 36px;

`

export const ContainerItens = styled.div `
display: flex;
flex-direction: column;


`


export const H1 = styled.h1 `

font-size: 38px;
color: #FFFFFF;
text-align:center;


`

export const InputLabel = styled.p `
color: #FFFFFF;
margin-bottom: 4px;
padding-left: 10px;


`

export const Input = styled.input `
width: 342px;
height: 58px;
border-radius: 14px;
border:none;
outline: none;
margin-bottom: 16px;
padding-left: 10px;
background: rgba(255, 255, 255, 0.25);
color: #FFFFFF;
font-size: 18px;


`

export const Button = styled.button `

width: 342px;
height: 68px;
background: #D93856;
margin-top: 26px;
color: #FFFFFF;
border: none;
cursor: pointer;

`
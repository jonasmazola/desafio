import styled from 'styled-components'
import Background from '../../img/fundo.png'

export const Container = styled.div`
background: url("${Background}");
background-size: cover;
display: flex;
margin:0 auto;
flex-direction: column;
align-items: center;
gap: 44px;
    height: 100%;
min-height: calc(100vh - 170px);
width: 414px;


`

export const Imagem = styled.img`
margin: 11px 36px 10px 36px;

`

export const ContainerItens = styled.div`
display: flex;
flex-direction: column;


`


export const H1 = styled.h1`

font-size: 38px;
color: #FFFFFF;
text-align:center;


`

export const InputLabelPedido = styled.p`
color: #FFFFCC;
font-weight: 200px;
margin-bottom: 4px;
padding-left: 20px;

`

export const InputLabelCliente = styled.p`
color: #FFFFFF;
font-weight: 700px;
margin-bottom: 4px;
padding-left: 20px;

`

export const Carrinho = styled.div`
width: 342px;
height: 101px;
display: flex;
flex-direction: row;
align-items: center;
border-radius: 14px;
border:none;
outline: none;
background: rgba(255, 255, 255, 0.25);
color: #FFFFFF;
font-size: 18px;

img {
    cursor: pointer;
}

`
export const Pedido = styled.div`
width: 90%;
text-align: left;

`

export const Button = styled.button`

width: 342px;
height: 68px;
background: #D93856;
margin-top: 26px;
color: #FFFFFF;
border: none;
cursor: pointer;

`
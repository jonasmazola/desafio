import Logo from '../../img/entrega.png'
import Lixeira from '../../img/lixeira.png'
import { useNavigate } from 'react-router-dom'
import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'

import {
    Container,
    Imagem,
    ContainerItens,
    H1,
    InputLabelCliente,
    InputLabelPedido,
    Carrinho,
    Pedido,
    Button
} from './style'




const Pedidos = () => {
    const navigate = useNavigate()
    const [items, setItems] = useState([])
    const itemPedido = useRef()
    const nomeCliente = useRef()


    useEffect(() => {
        async function fetchItem() {
            const { data: newPedidos } = await axios.get("http://localhost:3001/users")
            setItems(newPedidos)
        }

        fetchItem()


    }, [items])

  async  function deletarPedido (pedidoId) {

       await axios.delete('http://localhost:3001/users/' + pedidoId)
       const newPedidos = items.filter(item => item.id !== pedidoId)
       
       setItems(newPedidos)
        
    }

    function volterHome() {
        navigate("/")
    }

    return (
        <Container>
            <Imagem src={Logo} />

            <ContainerItens>
                <H1>Pedidos</H1>

                {
                    items.map((item) => (

                        <li key={item.id}>

                            <Carrinho >
                                <Pedido>
                                    <InputLabelPedido>{item.pedido}</InputLabelPedido>
                                    <InputLabelCliente>{item.cliente}</InputLabelCliente>
                                </Pedido>
                                <img onClick={() => deletarPedido(item.id)} src={Lixeira}></img>
                            </Carrinho>

                        </li>
                    ))
                }

                <Button onClick={volterHome}>
                    Voltar
                </Button>

            </ContainerItens>



        </Container >
    )












}


export default Pedidos
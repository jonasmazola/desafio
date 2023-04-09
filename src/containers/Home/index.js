import Logo from '../../img/pedido.png'
import React, {useState, useRef, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import {
    Container,
    Imagem,
    ContainerItens,
    H1,
    InputLabel,
    Input,
    Button
} from './style'




const App = () => {
    const navigate = useNavigate()
    const [item, items] = useState([])
    const itemPedido = useRef()
    const nomeCliente = useRef()


    async function salvarPedido() {

        const pedido = itemPedido.current.value
        const cliente = nomeCliente.current.value
        const {data: newPedido } = await axios.post("http://localhost:3001/users",{
            pedido: pedido,
            cliente: cliente
        })

        avancarTela()
    }
    
    function avancarTela(){
     navigate('/pedido')
    }


return (
    <Container>
        <Imagem src={Logo} />

        <ContainerItens>
            <H1>Faça seu pedido!</H1>
            <InputLabel>Pedido</InputLabel>
            <Input ref={itemPedido} placeholder='1 coca cola'></Input>

            <InputLabel>Nome do Cliente</InputLabel>
            <Input ref={nomeCliente} placeholder='Steve Jobs'></Input>

            <Button onClick={salvarPedido}>
                Novo Pedido
            </Button>

        </ContainerItens>
    


    </Container>
)












}


export default App
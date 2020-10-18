import axios from "axios";
import React, { useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import { BASE_URL } from "../../const/BaseUrl/BASE_URL";
import { useForm } from "../../hooks/useForm";
import { Select, DivContainerCard, CardAdd, TitleCard, AddCardConfig } from "./styled";


const Card = (props) => {
    const [quantity, setQuantity] = useState(0)
    
const onChangeCard = (event) => {
    setQuantity (event.target.value)
}

const addCart = () => {
    const newProduct = {id:props.productId, quantity:quantity}
    const cart = props.cartProducts
    const newCart = [...cart,newProduct]
    props.setCartProducts(newCart)
    props.setIsOpen(false)
}

    return (
        <DivContainerCard>
            <TitleCard>Selecione a quantidade desejada</TitleCard>
            <Select
            onChange= {onChangeCard}>
                <option value = {1}>1</option>
                <option value = {2}>2</option>
                <option value = {3}>3</option>
                <option value = {4}>4</option>
                <option value = {5}>5</option>
            </Select>
            <AddCardConfig>
                <CardAdd onClick = {addCart}>ADICIONAR AO CARRINHO</CardAdd>
            </AddCardConfig>
        </DivContainerCard>
    )
}

export default Card
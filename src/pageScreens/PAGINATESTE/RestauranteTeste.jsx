import React, { useEffect, useState } from "react"
import { BASE_URL } from "../../const/BaseUrl/BASE_URL";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components"
import { goToRestaurantePage, goToRestauranteTeste } from "../../routes/Cordinator"
import { useForm } from "../../hooks/useForm";
import Cardteste from "./CardTeste";

const Div = styled.div`
border: 1px solid black;
margin-bottom:2vh;
`


const RestauranteTeste = (props) => {
    const [teste, setTeste] = useState([""])

    const { form, onChange, resetState } = useForm({ name: "", email: "", cpf: "" });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChange(name, value);
    };



    useEffect(() => {
       

         handleRestaurants()
    }, []);


    const history = useHistory();
    const params = useParams()
    const handleRestaurants = () => {
        axios
            .get(`${BASE_URL}/restaurants`, {
                headers: {
                    auth: window.localStorage.getItem("token")
                }
            })
            .then((response) => {
                console.log("caiu aki nesse restaurantes???", response.data)
                setTeste(response.data.restaurants);


            })
            .catch((err) => {
                console.log("hummmm caiu aki", err.message);
            });

    }
    const handleProfile = () => {

        const body = {
            name: form.name,
            email: form.email,
            cpf: form.cpf
        }
        axios
            .put(`${BASE_URL}/profile`, body, {
                headers: {
                    auth: window.localStorage.getItem("token")
                }
            })
            .then((response) => {
                console.log("caiu aki nesse profile??", response.data)



            })
            .catch((err) => {
                console.log("hummmm caiu aki", err.message);
            });

    }




    const levarParaOutraPagina = () => {
        history.push("/restaurantes/:id");
    }

    return (
        <div>
            <input
                value={form.name}
                type="text"
                name="name"
                placeholder="Nome"
                required
                onChange={handleInputChange}>
            </input>
            <input
                value={form.email}
                type="text"
                name="email"
                placeholder="E-mail"
                required
                onChange={handleInputChange}>
            </input>
            <input
                value={form.cpf}
                type="number"
                name="cpf"
                placeholder="cpf."
                required
                onChange={handleInputChange}>
            </input>
               <button onClick={handleProfile}>teste</button> 
               {/* {teste.filter(item => item.id > 5).map(filteredItem => (
        <div id={item.id}>
         <img src= {filteredItem.logoUrl} width="100px"/>
          <p>nome:{filteredItem.name}</p>
          <p>{filteredItem.deliveryTime} min</p>
          <p>frete R$:{filteredItem.shipping.toFixed(2)}</p>
          <p>{filteredItem.address}</p>
        </div>
      ))} */}
            {teste.map((item) => {
                return (
                    <Cardteste 
                    id={item.id}
                     nome={item.name}
                  logoUrl={item.logoUrl} width="100px" 
                  botao={"teste"}
                 
                    />
                    // <Div key={item.id} onClick={}>
                    //     <p>{item.id}</p>
                    //     <p>{item.adress}</p>
                    //     <p>{item.category}</p>
                    //     <p>{item.deliveryTime}</p>
                    //     <p>{item.description}</p>
                    //     <img src={item.logoUrl} width="100px" />
                    //     <p>{item.name}</p>
                    //     <p>{item.shipping}</p>
                    //     <p onClick={() => goToRestauranteTeste(history, item.id)}>teste</p>
                    // </Div>
                )

            })}
            <button onClick={levarParaOutraPagina}>teste</button> 
        </div>
    )


}
export default RestauranteTeste
// import axios from "axios";
// import React, { useState } from "react"
// import { useHistory, useParams } from "react-router-dom";
// import { BASE_URL } from "../../const/BaseUrl/BASE_URL";
// import { useForm } from "../../hooks/useForm";
// import {Select} from "./styled"

// const Card = () => {
//     const [cart, setCart] = useState([])

//     const { form, onChange, resetState } = useForm({ id: "", quantity:"", paymentMethod:""});
//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         onChange(name, value);
//     };

//     const history = useHistory();
//     const pathParams = useParams()
//     const handleCart = () => {
//         const body =
//             {
//                 products: [{
//                     id: form.id,
//                     quantity: form.quantity,
//                 }, {
//                     quantity: form.quantity,
//                     id: form.id
//                 }],
//                 paymentMethod: form.paymentMethod
//             }
        

//         axios
//             .get(`${BASE_URL}/restaurants/${pathParams.id}/order`, body, {
//                 headers: {
//                     auth: window.localStorage.getItem("token")
//                 }
//             })
//             .then((response) => {

//                 console.log("caiu aki nesse cart???", response.data)
//                 setCart(response.data.restaurant.products)
               
//             })
//             .catch((err) => {
//                 console.log("hummmm cart não", err.message);
//             });
//     }


  
//     return (
//         <div>
//             <h3>Selecione a quantidade desejada</h3> 
//             <Select>
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//                 <option>5</option>
//             </Select>

//             <h2 onClick={handleCart}>ADICIONAR AO CARRINHO</h2>

//         </div>

//     )
// }

// export default Card
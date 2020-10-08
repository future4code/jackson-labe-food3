import React, { useEffect, useState } from "react"
import { BASE_URL } from "../../const/BaseUrl/BASE_URL";
import { Container, DivImage, DivFlex, Category, Card, Name, Image, Description, Price, ButtonCard,DivPriceButtonConfig } from "./styled"
import axios from "axios";
import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";


const RestaurantePage = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {

        handleProducts()
    }, []);



    const handleRestaurants = () => {
        axios
            .get(`${BASE_URL}/restaurants`, {
                headers: {
                    auth: window.localStorage.getItem("token")
                }
            })
            .then((response) => {
                console.log("caiu aki nesse restaurantes???", response.data)
                setProduct(response.data.restaurant.products);
                window.localStorage.setItem("token", response.data.token);

            })
            .catch((err) => {
                console.log("hummmm caiu aki", err.message);
            });

    }


    const { id } = useParams()

    const handleProducts = () => {

        axios
            .get(`${BASE_URL}/restaurants/1`, {
                headers: {
                    auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlF2allCbEVmVzY0N09hZWlOd3pQIiwibmFtZSI6ImRhbmllbCIsImVtYWlsIjoibGFiZWRhbmllbGxAaG90bWFpbC5jb20iLCJjcGYiOiI2NjYzMzM1NTU5NSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJydWEgYWJjZHNlLCAyMiwgQ2FzYSAtIHZpbGEgcmVzZW5kZSIsImlhdCI6MTYwMjEwMDYwMn0.w3Lr1ACPYQcyZzEPF_REe6VLZ8vMFgVVJXET37Y_khg"
                }
            })
            .then((response) => {
                console.log("caiu aki nesse handleproducts???", response.data.restaurant.products)
                setProduct(response.data.restaurant.products);


            })
            .catch((err) => {
                console.log("hummmm caiu aki", err.message);
            });
    }


    return (
        <Container>

            {product.map((item) => {
                return (
                    <div>
                        <Category>{item.category}</Category>
                        <Card>
                            <DivImage>
                                <Image src={item.photoUrl} width="97px" height="112.6px" object-fit="contain" />
                            </DivImage>
                            <DivFlex>
                                <Name>{item.name}</Name>
                                <Description>{item.description}</Description>  
                                <Price>R${item.price.toFixed(2)}</Price>
                                <DivPriceButtonConfig>
                                    <ButtonCard>Adicionar</ButtonCard>
                                </DivPriceButtonConfig>
                               
                            </DivFlex>
                            
                        </Card>
                        </div>
                    
                    )
                })}
        </Container>
                )
            }

export default RestaurantePage

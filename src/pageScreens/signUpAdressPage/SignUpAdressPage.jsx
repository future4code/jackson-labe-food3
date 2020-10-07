import React, { useEffect, useState } from "react"
import { BASE_URL } from "../../const/BaseUrl/BASE_URL";
import Back from "../../assets/Img/back.png"
import axios from "axios";
import { useHistory} from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BackConfig, Form, Title, Container, Input, ButtonSignUp, InputConfig, ImageConfig } from "./styled";
import { goBack } from "../../routes/Cordinator"
import { Button, } from "@material-ui/core";


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#E86E5A",
        },
        secondary: {
            main: "#008000",
        },
    },
});


const SignUpAdressPage = () => {

    const { form, onChange } = useForm({
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChange(name, value);
    };

    const history = useHistory();
    useEffect(() => {
        const token = window.localStorage.getItem("token");
        if (token) {
            //  history.push("/restaurantes/:id");
        }
    }, [history]);

    const handleAdress = () => {
        const body = {
            street: form.street,
            number: form.number,
            neighbourhood: form.neighbourhood,
            city: form.city,
            state: form.state,
            complement: form.complement
        }
        axios
            .put(`${BASE_URL}/address`, body, {
                headers: {
                    auth: window.localStorage.getItem("token")
                }
            })
            .then((response) => { 
                window.localStorage.setItem("token", response.data.token);
                console.log(response.data)
               
               

            })
            .catch((err) => {
                alert("Não foi possivel completar a sua solicitação, tente novamente mais tarde.")
            });
    }
    const backRemoveToken = () => {
        if (window.confirm("Se você voltar, não poderá usar os dados de CPF e E-mail cadastrados na primeira tentativa. Deseja realmente voltar?")) {
            localStorage.removeItem('token')
            goBack(history)
        }
    }
    return (
        <Container>
            <BackConfig onClick={backRemoveToken}> <ImageConfig src={Back} width="13vw" /> </BackConfig>
            <Title>Meu endereço</Title>
            <ThemeProvider theme={theme}>
                <Form >
                    <InputConfig>
                        <Input
                            fullWidth="bool"
                            color="primary"
                            variant={"outlined"}
                            label="Logradouro"
                            value={form.street}
                            type="text"
                            name="street"
                            placeholder="Rua / Av."
                            required
                            onChange={handleInputChange}>
                        </Input>
                    </InputConfig>
                    <InputConfig>
                        <Input
                            fullWidth="bool"
                            color="primary"
                            variant={"outlined"}
                            label="Número"
                            value={form.number}
                            type="text"
                            name="number"
                            placeholder="Número"
                            required
                            onChange={handleInputChange}>
                        </Input>
                    </InputConfig>
                    <InputConfig>
                        <Input
                            fullWidth="bool"
                            color="primary"
                            variant={"outlined"}
                            label="Complemento"
                            value={form.complement}
                            type="text"
                            name="complement"
                            placeholder="Apto / Bloco"
                            required
                            onChange={handleInputChange}>
                        </Input>
                    </InputConfig>
                    <InputConfig>
                        <Input
                            fullWidth="bool"
                            color="primary"
                            variant={"outlined"}
                            label="Bairro"
                            value={form.neighbourhood}
                            type="text"
                            name="neighbourhood"
                            placeholder="Bairro"
                            required
                            onChange={handleInputChange}>
                        </Input>
                    </InputConfig>
                    <InputConfig>
                        <Input
                            fullWidth="bool"
                            color="primary"
                            variant={"outlined"}
                            label="Cidade"
                            value={form.city}
                            type="text"
                            name="city"
                            placeholder="Cidade"
                            required
                            onChange={handleInputChange}>
                        </Input>
                    </InputConfig>
                    <InputConfig>
                        <Input
                            fullWidth="bool"
                            color="primary"
                            variant={"outlined"}
                            label="Estado"
                            value={form.state}
                            type="text"
                            name="state"
                            placeholder="Estado"
                            required
                            onChange={handleInputChange}>
                        </Input>
                    </InputConfig>
                    <ButtonSignUp>
                        <Button onClick={handleAdress} fullWidth="bool" size="large" variant="contained" color="primary">Salvar</Button>
                    </ButtonSignUp>
                </Form >
            </ThemeProvider>
        </Container>
    )
}
export default SignUpAdressPage

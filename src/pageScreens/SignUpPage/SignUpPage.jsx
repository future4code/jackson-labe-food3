import { useHistory } from "react-router-dom";
import { Container, InputConfig, Form, ButtonSignUp, Input, Image, BackConfig, ImageConfig, Title } from './styled'
import { goBack } from "../../routes/Cordinator"
import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from "../../hooks/useForm";
import { Button, } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import LOGO from "../../assets/Img/logo.png"
import Back from "../../assets/Img/back.png"
import { BASE_URL } from "../../const/BaseUrl/BASE_URL";
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

const SignUpPage = () => {
    const { form, onChange, resetState } = useForm({ name: "", email: "", cpf: "", password: "" });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChange(name, value);
    };
    const history = useHistory();
    useEffect(() => {
        
        const token = window.localStorage.getItem("token");
        if (token) {
             history.push("/endereco");
        }
    }, [history]);

    const handleSignUp = (event) => {
        event.preventDefault()
        resetState()
        const body = {
            name: form.name,
            email: form.email,
            cpf: form.cpf,
            password: form.password,
        };
        axios
            .post(`${BASE_URL}/signup`, body)
            .then((response) => {
                window.localStorage.setItem("token", response.data.token);
                 history.push("/endereco");
            })
            .catch((err) => {
                alert("Não foi possivel completar a sua solicitação, tente novamente mais tarde.")
            });
    };
    return (
        <Container>
            <BackConfig onClick={() => goBack(history)}> <ImageConfig src={Back} width="13vw" /> </BackConfig>
            <Image>
                <img src={LOGO} />
            </Image>
            <Title>Cadastrar</Title>
            <ThemeProvider theme={theme}>
                <Form >
                    <InputConfig>
                        <Input
                            fullWidth="bool"
                            color="primary"
                            variant={"outlined"}
                            label="Nome"
                            value={form.name}
                            type="name"
                            name="name"
                            placeholder="Nome"
                            required
                            onChange={handleInputChange}>
                        </Input>
                    </InputConfig>
                    <InputConfig>
                        <Input
                            fullWidth="bool"
                            color="primary"
                            variant={"outlined"}
                            label="E-mail"
                            value={form.email}
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            required
                            onChange={handleInputChange}>
                        </Input>
                    </InputConfig>
                    <InputConfig>
                        <Input
                            fullWidth="bool"
                            color="primary"
                            variant={"outlined"}
                            label="CPF"
                            value={form.cpf}
                            type="number"
                            name="cpf"
                            placeholder="digite seu CPF"
                            required
                            onChange={handleInputChange}>
                        </Input>
                    </InputConfig>
                    <InputConfig>
                        <Input
                            fullWidth="bool"
                            color="primary"
                            variant={"outlined"}
                            label="Senha"
                            value={form.password}
                            type="password"
                            name="password"
                            placeholder="senha"
                            required
                            onChange={handleInputChange}>
                        </Input>
                    </InputConfig>
                    <ButtonSignUp>
                        <Button onClick={handleSignUp} fullWidth="bool" size="large" variant="contained" color="primary">Criar</Button>
                    </ButtonSignUp>
                </Form>
            </ThemeProvider>
        </Container>
    );
}
export default SignUpPage;



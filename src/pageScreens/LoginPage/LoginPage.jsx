import { useHistory } from "react-router-dom";
import axios from 'axios'
import React, { useEffect } from 'react';
import { useForm } from "../../hooks/useForm";
import { goToSignUpPage } from "../../routes/Cordinator";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Container, InputConfig, Form, SignUp, Input, ButtonConfig, Image, Title } from "./styled"
import { Button, } from "@material-ui/core";
import LOGO from "../../assets/Img/logo.png"
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

const LoginPage = () => {

  const { form, onChange } = useForm({ senha: "", email: "" });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const history = useHistory();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      history.push("/restaurantes");
    }
  }, [history]);

  const handleLoginPage = () => {
    const body = {
      email: form.email,
      password: form.senha,
    };
    axios
      .post(`${BASE_URL}/login`, body)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        history.push("/restaurantes");
      })
      .catch((err) => {
        alert("Não foi possivel completar a sua solicitação, tente novamente mais tarde.")
      });
  };
  return (
    <Container>
      <Image>
        <img src={LOGO} />
      </Image>
      <Title>Entrar</Title>
      <ThemeProvider theme={theme}>
        <Form onSubmit={handleLoginPage}>
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
              label="Senha"
              value={form.senha}
              type={"password"}
              name="senha"
              placeholder="senha"
              required
              onChange={handleInputChange}>
            </Input>
          </InputConfig>
          <ButtonConfig>
            <Button onClick={handleLoginPage} fullWidth="bool" size="large" variant="contained" color="primary">Entrar</Button>
          </ButtonConfig>
          <SignUp onClick={() => goToSignUpPage(history)}>Não possui cadastro? Click aqui</SignUp>
        </Form>
      </ThemeProvider>
    </Container>
  );
}
export default LoginPage;

import React from "react"
import axios from 'axios'
import {
IconButton, 
Typography, 
Divider,
Button,
} from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {
AddressEditContainer,
Container,
Header,
Title,
HeaderTitle,
Form,
InputConfig,
Input,
ButtonConfig,
} from './Styled'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import {goBack} from '../../routes/Cordinator'
import { useForm } from "../../hooks/useForm";
import {BASE_URL} from '../../constants/urls'

const EditAdressPage = () => {
    useProtectedPage()
    const history = useHistory()
    const {form, onChange, resetState} = useForm({
      street: "", 
      number: "", 
      apartment: "",
      neighbourhood: "",
      city: "",
      state: "",
    })

    const handleInputChange = (event) => {
      const { name, value } = event.target
      onChange(name, value)
    }

    const handleEditAdress = (event) => {
      event.preventDefault()
      const body = {
        street: form.street,
        number: form.number, 
        apartment: form.apartment,
        neighbourhood: form.neighbourhood,
        city: form.city,
        state: form.state,
      }
      axios
      .put(`${BASE_URL}/address`, {headers: {
        auth: localStorage.getItem("token")
      }})
      .then((response) => {
        alert("Dados atualizados com sucesso!")
        resetState()
      })
      .catch((err) => {
        alert("Não foi possível atualizar os dados.")
      })
    }

    return (
        <AddressEditContainer>
            <Header>
                <IconButton onClick={() => goBack(history)}>
                    <ArrowBackIosIcon/>
                </IconButton>
                <Title>
                  <HeaderTitle>
                    Endereço
                  </HeaderTitle>
                </Title>
                <div></div>
            </Header>
            <Container>
                  <Form>
                      <InputConfig>
                        <Input
                          fullWidth="bool"
                          color="primary"
                          variant="outlined"
                          margin="normal"
                          label="Logradouro"
                          value={form.street}
                          type="text"
                          name="street"
                          placeholder="Logradouro"
                          required
                          onChange={handleInputChange}
                        >
                        </Input>
                      </InputConfig>
                      <InputConfig>
                        <Input
                          fullWidth="bool"
                          color="primary"
                          variant="outlined"
                          margin="normal"
                          label="Número"
                          value={form.number}
                          type="number"
                          name="number"
                          placeholder="Número"
                          required
                          onChange={handleInputChange}
                        >
                        </Input>
                      </InputConfig>
                      <InputConfig>
                        <Input
                          fullWidth="bool"
                          color="primary"
                          variant="outlined"
                          margin="normal"
                          label="Complemento"
                          value={form.apartment}
                          type="text"
                          name="apartment"
                          placeholder="Apto / Bloco"
                          onChange={handleInputChange}
                        >
                        </Input>
                      </InputConfig>
                      <InputConfig>
                        <Input
                          fullWidth="bool"
                          color="primary"
                          variant="outlined"
                          margin="normal"
                          label="Bairro"
                          value={form.neighbourhood}
                          type="text"
                          name="neighbourhood"
                          placeholder="Bairro"
                          required
                          onChange={handleInputChange}
                        >
                        </Input>
                      </InputConfig>
                      <InputConfig>
                        <Input
                          fullWidth="bool"
                          color="primary"
                          variant="outlined"
                          margin="normal"
                          label="Cidade"
                          value={form.city}
                          type="text"
                          name="city"
                          placeholder="Cidade"
                          required
                          onChange={handleInputChange}
                        >
                        </Input>
                      </InputConfig>
                      <InputConfig>
                        <Input
                          fullWidth="bool"
                          color="primary"
                          variant="outlined"
                          margin="normal"
                          label="Estado"
                          value={form.state}
                          type="text"
                          name="state"
                          placeholder="Estado"
                          required
                          onChange={handleInputChange}
                        >
                        </Input>
                      </InputConfig>
                      <ButtonConfig>
                        <Button onClick={handleEditAdress} fullWidth="bool" size="large" variant="contained" color="primary">Salvar</Button>
                      </ButtonConfig>
                  </Form>
            </Container>

            
        </AddressEditContainer>
    )
}

export default EditAdressPage

import React from "react"
import {
IconButton, 
Typography, 
Divider,
Button,
} from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {
Container,
Bar,
Title,
Form,
InputConfig,
Input,
ButtonConfig,
} from './Styled'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import {goBack} from '../../routes/Cordinator'

const EditAdressPage = () => {
    useProtectedPage()
    const history = useHistory()

    return (
        <div>
            <Bar>
                <IconButton onClick={() => goBack(history)}>
                    <ArrowBackIosIcon/>
                </IconButton>
                <Title>Endereço</Title>
            </Bar>
            <Container>
                  <Form>
                      <InputConfig>
                        <Input
                          fullWidth="bool"
                          color="primary"
                          variant="outlined"
                          margin="normal"
                          label="Logradouro"
                        //   value={form.email}
                          type="text"
                          name="street"
                          placeholder="Logradouro"
                          required
                        //   onChange={handleInputChange}
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
                        //   value={form.senha}
                          type="number"
                          name="number"
                          placeholder="Número"
                          required
                        //   onChange={handleInputChange}
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
                        //   value={form.senha}
                          type="text"
                          name="apartment"
                          placeholder="Apto / Bloco"
                        //   onChange={handleInputChange}
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
                        //   value={form.senha}
                          type="text"
                          name="neighbourhood"
                          placeholder="Bairro"
                          required
                        //   onChange={handleInputChange}
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
                        //   value={form.senha}
                          type="text"
                          name="city"
                          placeholder="Cidade"
                          required
                        //   onChange={handleInputChange}
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
                        //   value={form.senha}
                          type="text"
                          name="state"
                          placeholder="Estado"
                          required
                        //   onChange={handleInputChange}
                        >
                        </Input>
                      </InputConfig>
                      <ButtonConfig>
                        <Button fullWidth="bool" size="large" variant="contained" color="primary">Salvar</Button>
                      </ButtonConfig>
                  </Form>
            </Container>

            
        </div>
    )
}

export default EditAdressPage

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


const ProfileEditPage = () => {
    useProtectedPage()
    const history = useHistory()

    return (
        <div>
            <Bar>
                <IconButton onClick={() => goBack(history)}>
                    <ArrowBackIosIcon/>
                </IconButton>
                <Title>Editar</Title>
            </Bar>
            <Container>
                  <Form>
                      <InputConfig>
                        <Input
                          fullWidth="bool"
                          color="primary"
                          variant="outlined"
                          margin="normal"
                          label="Nome"
                        //   value={form.email}
                          type="name"
                          name="name"
                          placeholder="Nome"
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
                          label="E-mail"
                        //   value={form.senha}
                          type={"email"}
                          name="email"
                          placeholder="E-mail"
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
                          label="CPF"
                        //   value={form.senha}
                          type={"number"}
                          name="cpf"
                          placeholder="CPF"
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

export default ProfileEditPage

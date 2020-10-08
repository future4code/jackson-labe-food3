import styled from 'styled-components'
import {TextField, Typography} from '@material-ui/core'

export const Bar = styled.div`
    width: 375px;
    height: 64px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: var(--white);
    display: flex;
    justify-content: space-around;
`
export const Title = styled(Typography)`
    width: 175px;
    height: 44px;
    margin-left: 80px;
    margin-top: 30px;
    padding-left: 20px;
    padding-top: 20px;
`
export const Container = styled.div`
    background-color:#ffff;
    width:100vw;
`

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    width:100vw;
    align-items:center;
    background-color:#ffff;

`
export const InputConfig = styled.div`
    width:90%;
    font-size:30px;
    margin-top:1vh;
    color: black;
`
export const Input = styled(TextField)`
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}
`
export const ButtonConfig = styled.div`
width:90%;
margin-top:2vh;
`

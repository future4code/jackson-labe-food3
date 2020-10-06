import styled from "styled-components"
import {  TextField } from "@material-ui/core";


export const Container = styled.div`
background-color:#ffff;
width:100vw;
`

export const Form= styled.form`
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
margin:3vw 0 0 5vw 
color:black
`
export const Buttonn = styled.button`
font-size:30px;
cursor:pointer;
`
export const ContainerButton = styled.div`
margin-top:2vh;

`
export const ButtonAnimation = styled.span`
cursor:pointer;
`
export const SignUp = styled.p`
cursor:pointer;

height: 18px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
text-align: center;
color: var(--black);
`
export const Teste = styled(TextField)`
color:green;
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
margin-top:2vh
`
export const Image = styled.div`
text-align:center;
margin: 6vh 0 4vh 0
`
export const Title = styled.h3`
  height: 18px;
  font-family: Roboto;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
`



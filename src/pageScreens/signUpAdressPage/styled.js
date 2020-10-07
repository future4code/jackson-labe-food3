import styled from "styled-components"

import { TextField } from "@material-ui/core";
export const Container = styled.div`

width:100vw;
`

export const Form= styled.form`
display:flex;
flex-direction:column;
width:100vw;
align-items:center;
margin-top:2vh
`
export const InputConfig = styled.div`
width:90vw;
margin-bottom:2vh;

`
export const Button = styled.button`
font-size:30px;
cursor:pointer
`
export const ContainerButton = styled.div`
margin-top:2vh;
`
export const ButtonSignUp = styled.div`
width:90vw;

`
export const Input = styled(TextField)`
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active  {
-webkit-box-shadow: 0 0 0 30px white inset !important;
}
`
export const Image = styled.div`
text-align:center;
margin-top:4vh
`
export const BackConfig = styled.p`
padding-bottom:3vh;
border-bottom:1px solid gray;
`
export const ImageConfig = styled.img`
margin:3vw 0 0 5vw 
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
  margin-bottom:3.5vh
`

import styled from 'styled-components'
import {IconButton} from '@material-ui/core'

export const Bar = styled.div`
    width: 375px;
    height: 64px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: var(--white);
`
export const Title = styled.div`
    width: 175px;
    height: 44px;
    margin-left: 93px;
    margin-right: 92px;
    margin-top: 20px;
    padding-left: 53.5px;
    padding-top: 13px;
    padding-bottom: 12px;
`
export const TitleP = styled.p`
    width: 68px;
    height: 19px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--black);
`

export const ContainerInfo = styled.div`
    width: 375px;
    height: 90px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--black);
    padding-left: 16px;
    display: flex;
    justify-content:space-between;
    margin-top: 16px;
`
export const Retangle = styled.div`
    width: 375px;
    height: 76px;
    background-color: #eeeeee;
    padding-left: 16px;
    padding-top: 3px;
    display: flex;
    justify-content:space-between;
`
export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const DivIcon = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 16px;
`
export const DivHistory = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px 16px;
`
export const CardOrder = styled.div`
    width: 320px;
    height: 102px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    padding: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const Footer = styled.div`
    width: 375px;
    height: 50px;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #b8b8b8;
`

export const DivFooter = styled.div`
    display: flex;
    justify-content: space-around;
`
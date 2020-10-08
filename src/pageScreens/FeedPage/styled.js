import { Card, CardContent, CardMedia } from '@material-ui/core'
import styled from 'styled-components'

export const FeedPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: Roboto;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  width: 100%;
  height: 64px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const HeaderTitleBox = styled.div`
  width: 175px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderTitle = styled.h1`
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -0.39px;
`

export const SearchBox = styled.div`
  height: 56px;
  margin: 8px 16px;
  padding-left: 17px;
  padding-right: 8px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  display: flex;
  align-items: center;
  gap: 15.3px;
`
export const SearchPlaceholder = styled.p`
  margin: 0;
  /* font-size: 16px; */
  letter-spacing: -0.39px;
  color: #d0d0d0;
`

export const FilterBox = styled.div`
  box-sizing: border-box;
  height: 42px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const FilterItem = styled.span`
  width: 87px;
  height: 18px;
`

export const FilterText = styled.p`
  margin: 0;
  width: 87px;
  height: 18px;
  letter-spacing: -0.39px;
  text-align: center;
  /* color: #e86e5a; */
`

export const RestaurantsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

export const Footer = styled.div`
  width: 100%;
  height: 49px;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
  /* position: fixed;
  bottom: 0;
  left: 0; */
  display: flex;
  justify-content: space-around;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`

export const RestaurantCardWrapper = styled(Card)`
  min-width: 328px;
  height: 188px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
`

export const RestaurantImage = styled(CardMedia)`
  height: 120px;
`

export const RestaurantInfo = styled(CardContent)`
  padding: 12px 16px 0 !important;
`

export const RestaurantTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 2px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: -0.39px;
  color: #e86e5a;
`

export const RestaurantDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`

export const DeliveryTimeText = styled.p`
  margin: 0;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  flex-grow: 1;
`

export const ShippingText = styled.p`
  margin: 0;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  text-align: end;
  flex-grow: 1;
`
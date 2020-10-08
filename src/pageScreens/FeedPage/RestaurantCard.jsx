import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import { DeliveryTimeText, RestaurantCardWrapper, RestaurantDetails, RestaurantImage, RestaurantInfo, RestaurantTitle, ShippingText } from './styled';

const RestaurantCard = props => {
  return (
    <RestaurantCardWrapper>
      <CardActionArea>
        <RestaurantImage
          image="http://soter.ninja/futureFoods/logos/habibs.jpg"
          title="Habib's logo"
        />
        <RestaurantInfo>
          <RestaurantTitle>Habib's</RestaurantTitle>
          <RestaurantDetails>
            <DeliveryTimeText>60 min</DeliveryTimeText>
            <ShippingText>Frete R$6,00</ShippingText>
          </RestaurantDetails>
        </RestaurantInfo>
      </CardActionArea>
    </RestaurantCardWrapper>
  );
}

export default RestaurantCard
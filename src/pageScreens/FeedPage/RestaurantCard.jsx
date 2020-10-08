import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import { DeliveryTimeText, RestaurantCardWrapper, RestaurantDetails, RestaurantImage, RestaurantInfo, RestaurantTitle, ShippingText } from './styled';

const RestaurantCard = props => {
  return (
    <RestaurantCardWrapper>
      <CardActionArea>
        <RestaurantImage
          image={props.logoUrl}
          title={`${props.name} logo`}
        />
        <RestaurantInfo>
          <RestaurantTitle>{props.name}</RestaurantTitle>
          <RestaurantDetails>
            <DeliveryTimeText>{`${props.deliveryTime} min`}</DeliveryTimeText>
            <ShippingText>{`Frete R$${props.shipping},00`}</ShippingText>
          </RestaurantDetails>
        </RestaurantInfo>
      </CardActionArea>
    </RestaurantCardWrapper>
  );
}

export default RestaurantCard
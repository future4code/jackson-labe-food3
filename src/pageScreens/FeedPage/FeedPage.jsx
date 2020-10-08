import React from "react"
import { FeedPageContainer, FilterBox, FilterItem, FilterText, Footer, Header, HeaderTitle, HeaderTitleBox, RestaurantsListContainer, SearchBox, SearchPlaceholder } from "./styled"
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { ReactComponent as HomePageSelected } from '../../assets/icons/homepage-selected.svg'
import { ReactComponent as ShoppingCartIcon } from '../../assets/icons/shopping-cart.svg'
import { ReactComponent as AvatarIcon } from '../../assets/icons/avatar.svg'
import useRequestData from "../../hooks/useRequestData"
import RestaurantCard from './RestaurantCard'

const FeedPage = () => {

	const [restaurantsList, updateRestaurantsList] = useRequestData({}, '/restaurants')

	const restaurants = restaurantsList.restaurants

	console.log(restaurants)

	// const renderRestaurants = () => (
	// 	restaurants.map(item => {
	// 		return (
	// 			<RestaurantCard
	// 				key={item.id}
	// 				restaurantId={item.id}
	// 				logoUrl={item.logoUrl}
	// 				name={item.name}
	// 				deliveryTime={item.deliveryTime}
	// 				shipping={item.shipping}
	// 			/>
	// 		)
	// 	})
	// )

	return (
		<FeedPageContainer>
			<Header>
				<HeaderTitleBox>
					<HeaderTitle>Rappi4</HeaderTitle>
				</HeaderTitleBox>
			</Header>
			<SearchBox>
				<SearchIcon />
				<SearchPlaceholder>Restaurante</SearchPlaceholder>
			</SearchBox>
			<FilterBox>
				<FilterItem><FilterText>Árabe</FilterText></FilterItem>
				<FilterItem><FilterText>Asiática</FilterText></FilterItem>
				<FilterItem><FilterText>Hamburguer</FilterText></FilterItem>
				<FilterItem><FilterText>Italiana</FilterText></FilterItem>
				<FilterItem><FilterText>Sorvetes</FilterText></FilterItem>
				<FilterItem><FilterText>Carnes</FilterText></FilterItem>
				<FilterItem><FilterText>Baiana</FilterText></FilterItem>
				<FilterItem><FilterText>Petiscos</FilterText></FilterItem>
				<FilterItem><FilterText>Mexicana</FilterText></FilterItem>
			</FilterBox>
			<RestaurantsListContainer>
				{/* {renderRestaurants()} */}
				{/* {restaurants ? renderRestaurants() : <></>} */}
				<RestaurantCard />
			</RestaurantsListContainer>
			<Footer>
				<div><HomePageSelected /></div>
				<div><ShoppingCartIcon /></div>
				<div><AvatarIcon /></div>
			</Footer>
		</FeedPageContainer>
	)
}

export default FeedPage
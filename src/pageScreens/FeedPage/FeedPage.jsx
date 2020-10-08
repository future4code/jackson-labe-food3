import React, { useState } from "react"
import { FeedPageContainer, FilterBox, FilterItem, FilterText, Footer, Header, HeaderTitle, HeaderTitleBox, RestaurantsListContainer, SearchBox, SearchPlaceholder } from "./styled"
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { ReactComponent as HomePageSelected } from '../../assets/icons/homepage-selected.svg'
import { ReactComponent as ShoppingCartIcon } from '../../assets/icons/shopping-cart.svg'
import { ReactComponent as AvatarIcon } from '../../assets/icons/avatar.svg'
import useRequestData from "../../hooks/useRequestData"
import { useHistory } from "react-router-dom"
import { goToCartPage, goToProfilePage, goToRestaurantSearchPage } from "../../routes/Cordinator"
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard"

const FeedPage = () => {
	const history = useHistory()
	const [restaurantsList, updateRestaurantsList] = useRequestData({}, '/restaurants')
	const [filter, setFilter] = useState("")

	const restaurants = restaurantsList.restaurants

	const categories = restaurants && Array.from(new Set(restaurants.map(item => item.category)))

	const renderFilter = () => (
		categories.map(item => {
			return (
				<FilterItem
					key={item}
					onClick={()=>setFilter(item === filter ? "" : item )}
					style={{color: item === filter && "#E86E5A"}}
				>
					<FilterText>
						{item}
					</FilterText>
				</FilterItem>
			)
		})
	)

	const renderRestaurants = () => (
		restaurants.filter(item => filter === "" ? 1 : item.category === filter)
		.map(item => {
			return (
				<RestaurantCard
					key={item.id}
					restaurantId={item.id}
					logoUrl={item.logoUrl}
					name={item.name}
					deliveryTime={item.deliveryTime}
					shipping={item.shipping}
					history={history}
				/>
			)
		})
	)

	return (
		<FeedPageContainer>
			<Header>
				<HeaderTitleBox>
					<HeaderTitle>Rappi4</HeaderTitle>
				</HeaderTitleBox>
			</Header>
			<SearchBox onClick={()=>goToRestaurantSearchPage(history)}>
				<SearchIcon />
				<SearchPlaceholder>Restaurante</SearchPlaceholder>
			</SearchBox>
			<FilterBox>
				{categories && renderFilter()}
			</FilterBox>
			<RestaurantsListContainer>
				{restaurants && renderRestaurants()}
			</RestaurantsListContainer>
			<Footer>
				<div><HomePageSelected /></div>
				<div onClick={()=>goToCartPage(history)}><ShoppingCartIcon /></div>
				<div onClick={()=>goToProfilePage(history)}><AvatarIcon /></div>
			</Footer>
		</FeedPageContainer>
	)
}

export default FeedPage
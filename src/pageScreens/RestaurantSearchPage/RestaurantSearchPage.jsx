import React, { useState } from 'react'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import useRequestData from '../../hooks/useRequestData'
import { BackButton, Header, HeaderTitle, HeaderTitleBox, RestaurantsListContainer, RestaurantSearchPageContainer, SearchBox, SearchInput, SearchPlaceholder } from "./styled"
import { ReactComponent as BackIcon } from '../../assets/icons/back.svg'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'

const RestaurantSearchPage = () => {
	const [search, setSearch] = useState("")
  const [restaurantsList, updateRestaurantsList] = useRequestData({}, '/restaurants')
	const restaurants = restaurantsList.restaurants
	
	const renderSearchPlaceholder = () => (
		<SearchPlaceholder>Busque por nome de restaurante</SearchPlaceholder>
	)

  const renderRestaurantSearch = () => (
		restaurants.map(item => {
			return (
				<RestaurantCard
					key={item.id}
					restaurantId={item.id}
					logoUrl={item.logoUrl}
					name={item.name}
					deliveryTime={item.deliveryTime}
					shipping={item.shipping}
				/>
			)
		})
	)
    
  return (
    <RestaurantSearchPageContainer>
      <Header>
				<BackButton>
					<BackIcon/>
				</BackButton>
				<HeaderTitleBox>
					<HeaderTitle>Busca</HeaderTitle>
				</HeaderTitleBox>
			</Header>
			<SearchBox>
				<SearchIcon />
				<SearchInput
					name="search"
					placeholder='Restaurante'
					autoFocus
					onChange={event => setSearch(event.target.value)}
					value={search}
				/>
			</SearchBox>
			<RestaurantsListContainer>
				{search === "" ? renderSearchPlaceholder() : renderRestaurantSearch()}
			</RestaurantsListContainer>
    </RestaurantSearchPageContainer>
  )  
}

export default RestaurantSearchPage
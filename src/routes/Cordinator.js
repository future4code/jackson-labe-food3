export const goToLoginPage = (history) => {
    history.push("/login");
};
export const goToSignUpPage = (history) => {
    history.push("/cadastro");
};
export const goToSignUpAdressPage = (history) => {
    history.push("/endereco");
};
export const goToFeedPage = (history) => {
    history.push("/restaurantes");
}

export const goToRestaurantSearchPage = (history) => {
    history.push("/restaurantes/busca");
}

// export const goToRestauranteConfirmPage = (history) => {
//     history.push("/restaurantepage");
// }


export const goToRestaurantePage = (history, id) => {
    history.push(`/restaurantes/${id}`);
};
export const goToCartPage = (history) => {
    history.push("/carrinho");
};
export const goToProfilePage = (history) => {
    history.push("/perfil");
};
export const goToProfileEditPage = (history) => {
    history.push("/perfil/editar");
}
export const goToEditAdressPage = (history) => {
    history.push("/perfil/endereco");
};
export const goBack = (history) => {
    history.goBack();
}




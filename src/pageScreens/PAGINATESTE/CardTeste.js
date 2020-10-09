import React from "react"
import { useHistory } from "react-router-dom";
import { goToRestaurantePage } from "../../routes/Cordinator"
import ProfileHistoryPage from "../ProfileHistoryPage/ProfileHistoryPage"

const Cardteste = (props) => {


    const history = useHistory();

    return(
        <div>
             <div >
                        <p>{props.nome}</p>
                        <img src={props.logoUrl} width="100px" />
                         <button onClick={() => goToRestaurantePage(history,props.id)}>{props.botao}</button>
                    </div>
        </div>

    )
}

export default Cardteste
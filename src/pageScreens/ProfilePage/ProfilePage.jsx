// import React from "react"
// import {
// IconButton, 
// Typography, 
// Divider
// } from '@material-ui/core'
// import CreateIcon from '@material-ui/icons/Create';
// import HomeIcon from '@material-ui/icons/Home';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import PersonIcon from '@material-ui/icons/Person';
// import {
// ContainerInfo,
// Bar,
// Title,
// DivText,
// DivIcon,
// TitleP,
// Retangle,
// DivHistory,
// CardOrder,
// Footer,
// DivFooter,
// } from './Style'
// import useProtectedPage from '../../hooks/useProtectedPage'
// import useRequestData from '../../hooks/useRequestData'
// import { useHistory } from 'react-router-dom'

// const ProfilePage = () => {
//     useProtectedPage()
//     const history = useHistory()
//     const data = useRequestData([], `/profile`)
//     const user = data.user

//     // const renderUser = () => {
//     //     return(
//     //         user.map((item) => {
//     //             return(
//     //                 <div key={item.id}>
//     //                     <ContainerInfo>
//     //                         <DivText>
//     //                             <Typography>{item.name}</Typography>
//     //                             <Typography>{item.email}</Typography>
//     //                             <Typography>{item.cpf}</Typography>
//     //                         </DivText>
//     //                         <DivIcon>
//     //                             <IconButton>
//     //                                 <CreateIcon/>
//     //                             </IconButton>          
//     //                         </DivIcon>
//     //                     </ContainerInfo>
//     //                     <Retangle>
//     //                         <DivText>
//     //                             <Typography style={{color: "grey"}}>Endereço cadastrado</Typography>
//     //                             <Typography>{item.address}</Typography>
//     //                         </DivText>
//     //                         <DivIcon>
//     //                             <IconButton>
//     //                                 <CreateIcon/>
//     //                             </IconButton>   
//     //                         </DivIcon>
//     //                     </Retangle>
//     //                 </div>
//     //             )
//     //         })
//     //     )
//     // }

//     // const renderOrders = () => {
//     //     return(
//     //         orders.map((item) => {
//     //             return(
//     //                 <CardOrder key={item.id}>
//     //                     <Typography variant="h6" color="primary">Nome do restaurante</Typography>
//     //                     <Typography variant="subtitle2">data</Typography>
//     //                     <Typography variant="h5">Total</Typography>
//     //                 </CardOrder>
//     //             )
//     //         })
//     //     )
//     // }
    
    
//     return (
//         <div>
//             <Bar>
//                 <Title>
//                     <TitleP>Meu perfil</TitleP>
//                 </Title>
//             </Bar>
//             <div>
//                 {/* {renderUser()} */}
//             </div>
//             <DivHistory>
//                 <Typography>Histórico de pedidos</Typography>
//                 <Divider variant="middle" />
//                 <div>
//                     {/* {renderOrders()} */}
//                 </div>
//             </DivHistory>
//             <Footer>
//                 <DivFooter>
//                     <IconButton>
//                         <HomeIcon/>
//                     </IconButton>
//                     <IconButton>
//                         <ShoppingCartIcon/>
//                     </IconButton>  
//                     <IconButton>
//                         <PersonIcon/>
//                     </IconButton>               
//                 </DivFooter>
//             </Footer>
//         </div>
//     )
// }

// export default ProfilePage

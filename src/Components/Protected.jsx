// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useEffect } from 'react';
// const Protected = (prop) => {
//     const {Component} =prop;
//     const navigate =useNavigate()
    
//         // useEffect(()=>{
//         //     let login =localStorage.getItem('token');
//         //     if(!login){
//         //         navigate('/login');
//         //     }
//         // },[navigate])
//     return (
//         <div>
//             <Component/>
//         </div>
//     )
// }

// export default Protected;
// // const { authed } = useNavigate();

import React from 'react';
import { Outlet ,Navigate } from "react-router-dom";

const Protected = () => {
const auth =localStorage.getItem('token');
return auth ?<Outlet/>:<Navigate to={'/login'}/>
}

export default Protected

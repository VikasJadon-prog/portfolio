import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
const Protected = (prop) => {
    const {Component} =prop
    const navigate=useNavigate();
    useEffect(()=>{
        let login =localStorage.getItem('login');
        if(!login){
            navigate('/login')
        }
    },[])
  return (
    <div>
      <Component/>
    </div>
  )
}

export default Protected;

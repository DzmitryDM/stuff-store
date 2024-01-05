import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { selectAuthUser } from '../shared/model/auth-slice/selectAuth';
import { useNavigate } from 'react-router-dom';

export  function Pageses() {
  
const user = useSelector(selectAuthUser)
const navigate = useNavigate()



useEffect(()=>{
  if(!user){
  navigate('/')
  }
},[user])

  console.log('RENDER');

  return (
    <div>Pageses</div>
  )
}

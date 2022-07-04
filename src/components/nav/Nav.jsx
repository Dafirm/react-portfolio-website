import React from 'react'
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {MdContactPhone} from 'react-icons/md'
import { useState } from 'react';


const  Nav = () =>{
  const [actively, setActively] = useState('#')
  return (
    <nav>
      <a href='#' className={actively === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about'><AiOutlineUser/></a>
      <a href='#experience'><BiBook/></a>
      <a href='#services'><RiServiceLine/></a>
      <a href='#contact'><MdContactPhone/></a>
    </nav>
  )
}

export default Nav
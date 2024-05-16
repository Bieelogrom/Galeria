import { useState } from 'react'
import { Nav, TituloSite, OpcoesSite } from '../estilo'
import { IoHeartSharp } from "react-icons/io5";

function Navbar() {
  const personagens = ["Kenny", "Cartman", "Butters", "Kyle"];
  const opcoes = personagens.map(personagem => <a href=''>{personagem}</a>)

  return (
    <Nav>
      <TituloSite>
        <h1>@SouthPark</h1>
        <small>Galeria da Turminha <IoHeartSharp size={12}/></small>
      </TituloSite>
      
      <OpcoesSite>
        {opcoes}
      </OpcoesSite>
    </Nav>
  )
}

export default Navbar

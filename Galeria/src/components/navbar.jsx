import { useState } from 'react'
import { Nav, TituloSite, OpcoesSite } from './estilo'
import { IoHeartSharp } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom"

function Navbar() {
  const personagens = ["Kenny", "Cartman", "Butters", "Kyle"];
  const opcoes = personagens.map(personagem => <Link to={personagem}>{personagem}</Link>)

  return (
    <>
      <Nav>
        <TituloSite>
          <h1>@SouthPark</h1>
          <small>Galeria da Turminha <IoHeartSharp size={12} /></small>
        </TituloSite>

        <OpcoesSite>
          {opcoes}
        </OpcoesSite>
      </Nav>
      <Outlet/>
    </>

  )
}

export default Navbar

import React from 'react'
import { Container } from './styles'
import BtnNavBar from '../btnNavBar'
import { Row } from 'reactstrap'
import Perfil from '../../assets/img/perfil.svg'

const navBar: React.FC = () => {
  function handleLogout() {
    localStorage.removeItem('connected')
  }
  function handleMobile() {
    const nav = document.getElementsByClassName('nav')[0]
    const logout = document.getElementsByClassName('photo')[0]
    nav.classList.toggle('active')
    logout.classList.toggle('active')
  }
  return (
    <Container className="d-flex justify-content-between">
      <Row className="col-12">
        <div className="col-2">
          <div className="logo">
            <h1>MA</h1>
          </div>
        </div>
        <a onClick={() => handleMobile()} href="#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="nav col-8 justify-content-end">
          <BtnNavBar Text="Personagens" Href="/" />
          <BtnNavBar Text="Filmes" Href="/movies" />
          <BtnNavBar Text="HQs" Href="/comics" />
        </div>
        <div className="photo col-sm-2 d-flex justify-content-center">
          <img src={Perfil} />
          <a onClick={handleLogout} href="/">
            Sair
          </a>
        </div>
      </Row>
    </Container>
  )
}

export default navBar

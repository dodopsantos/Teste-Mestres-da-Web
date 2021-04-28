import React from 'react'
import { Container } from './styles'
import { Link, useLocation } from 'react-router-dom'

const btnNavBar: React.FC<{ Text: string; Href: string }> = ({
  Text,
  Href
}) => {
  const router = useLocation()

  const style: React.CSSProperties = {
    color: router.pathname === Href ? '#ffffff' : '#84848D'
  }

  return (
    <Container>
      <Link to={Href} style={style}>
        {Text}
      </Link>
    </Container>
  )
}

export default btnNavBar

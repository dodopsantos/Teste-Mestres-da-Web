import React, { useContext, useEffect, useState } from 'react'
import { Container } from './styles'
import MoviesContext from '../../contexts/movies'
import moviesModel from '../../models/movies'
import HeroCard from '../../components/heroCard'
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from 'reactstrap'
import { ArrowBack, ArrowForward } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton'

const Movies: React.FC = () => {
  const { movies } = useContext(MoviesContext)
  const [active, setActive] = useState<number>(0)
  const [amount, setAmount] = useState<number>(0)
  const [dropdownOpen, setOpen] = useState(false)

  const toggle = () => setOpen(!dropdownOpen)

  useEffect(() => {
    if (window.screen.availWidth >= 1200) {
      setAmount(3)
    } else if (
      window.screen.availWidth >= 800 &&
      window.screen.availWidth < 1200
    ) {
      setAmount(2)
    } else {
      setAmount(1)
    }
  }, [])

  return (
    <Container>
      <div className="dropdown">
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>Filtrar por</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Lançamento</DropdownItem>
            <DropdownItem>Cronologia</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
      <div className="display">
        <div className="col-12 d-flex justify-content-center">
          <div className="content col-12 col-xl-11">
            {active === 0 ? (
              <></>
            ) : (
              <IconButton
                onClick={() => setActive(active - 1)}
                color="secondary"
              >
                <ArrowBack fontSize="large" />
              </IconButton>
            )}

            {movies.length > 0 &&
              movies
                .slice(active, active + amount)
                .map((item: moviesModel, index: number) => {
                  return <HeroCard key={index} data={item} />
                })}
            {active >= movies.length - amount ? (
              <></>
            ) : (
              <IconButton
                onClick={() => setActive(active + 1)}
                color="secondary"
              >
                <ArrowForward fontSize="large" />
              </IconButton>
            )}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Movies

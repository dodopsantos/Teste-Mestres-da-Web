import React, { useContext, useEffect, useState } from 'react'
import { Container } from './styles'
import ComicsContext from '../../contexts/comics'
import comicsModel from '../../models/comics'
import HeroCard from '../../components/heroCard'
// import { Row } from 'reactstrap'
import { ArrowBack, ArrowForward } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton'

const Comics: React.FC = () => {
  const { comics } = useContext(ComicsContext)
  const [active, setActive] = useState<number>(0)
  const [amount, setAmount] = useState<number>(0)

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
      <div className="col-12 d-flex justify-content-center">
        <div className="content col-12 col-xl-11">
          {active === 0 ? (
            <></>
          ) : (
            <IconButton onClick={() => setActive(active - 1)} color="secondary">
              <ArrowBack fontSize="large" />
            </IconButton>
          )}

          {comics.length > 0 &&
            comics
              .slice(active, active + amount)
              .map((item: comicsModel, index: number) => {
                return <HeroCard key={index} data={item} />
              })}
          {active >= comics.length - amount ? (
            <></>
          ) : (
            <IconButton onClick={() => setActive(active + 1)} color="secondary">
              <ArrowForward fontSize="large" />
            </IconButton>
          )}
        </div>
      </div>
    </Container>
  )
}

export default Comics

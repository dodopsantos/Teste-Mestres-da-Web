import React, { useEffect, useState } from 'react'
import characterModel from '../../models/character'
import comicsModel from '../../models/comics'
import { Container, Modal } from './styles'

interface PropTypes {
  data: characterModel | comicsModel
}

const Datas = (props: PropTypes) => {
  const [isVisible, setIsVisible] = useState<Boolean>(false)
  const [series, setSeries] = useState<Array<any>>([])
  const img = props.data.image
  const style: React.CSSProperties = {
    backgroundImage: `url(${img})`
  }

  function Series() {
    const flag: Array<any> = []
    Object.keys(props.data.series).map((key, index: any) => {
      return flag.push(props.data.series[key].name)
    })

    setSeries(flag)
  }

  useEffect(() => {
    if (props.data.series) {
      Series()
    }
  }, [])

  return (
    <Container style={style}>
      <div className="content">
        <div className="heroName">{props.data.name}</div>
        <div className="description">{props.data.description}</div>
        <div className="button">
          <button onClick={() => setIsVisible(true)}>Ver detalhe</button>
        </div>
        {isVisible ? (
          <Modal>
            <div className="mContainer">
              <img src={props.data.image} />
              <div className="mContent">
                <div className="mHeroName">{props.data.name}</div>
                <div className="mDescription">
                  <p>APARIÇÕES: </p>
                  {series.length > 0
                    ? series.map((item: string, index: number) => {
                        return <p key={index}>{item}</p>
                      })
                    : props.data.description}
                </div>
                <div className="mButton">
                  <button onClick={() => setIsVisible(false)}>X</button>
                </div>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </Container>
  )
}

export default Datas

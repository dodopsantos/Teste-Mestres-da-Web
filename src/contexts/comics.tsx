import React, { createContext, useEffect, useState } from 'react'
import api from '../services/api'
import { Md5 } from 'ts-md5/dist/md5'
import { AxiosResponse } from 'axios'
import comicsModel from '../models/comics'

interface ComicsContextData {
  comics: Array<comicsModel>
}

const ComicsContext = createContext<ComicsContextData>({} as ComicsContextData)

export const ComicsProvider: React.FC = ({ children }) => {
  const [comics, setComics] = useState<Array<comicsModel>>([])

  async function getComics() {
    const ts = Math.floor(Date.now() / 1000)
    const hash = Md5.hashStr(
      ts +
        '14ce00fd0f81340621299c3635753555eeef875e6ef30c0482fa36b53d2f8fdbbb6d031a'
    )

    const herosArray: Array<comicsModel> = []
    await api
      .get(
        `/comics?ts=${ts}&apikey=6ef30c0482fa36b53d2f8fdbbb6d031a&hash=${hash}&limit=50&offset=2`
      )
      .then((response: AxiosResponse<any>) => {
        response.data.data.results.forEach((item: any) => {
          herosArray.push({
            id: item.id,
            image:
              item.thumbnail.path +
              '/portrait_uncanny.' +
              item.thumbnail.extension,
            name: item.title,
            description: item.description,
            series: null
          })
        })
        setComics(herosArray)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getComics()
  }, [])

  return (
    <ComicsContext.Provider value={{ comics }}>
      {children}
    </ComicsContext.Provider>
  )
}

export default ComicsContext

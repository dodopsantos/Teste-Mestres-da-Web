import React, { createContext, useEffect, useState } from 'react'
import api from '../services/api'
import { Md5 } from 'ts-md5/dist/md5'
import { AxiosResponse } from 'axios'
import moviesModel from '../models/movies'

interface MoviesContextData {
  movies: Array<moviesModel>
}

const MoviesContext = createContext<MoviesContextData>({} as MoviesContextData)

export const MoviesProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<Array<moviesModel>>([])

  async function getMovies() {
    const ts = Math.floor(Date.now() / 1000)
    const hash = Md5.hashStr(
      ts +
        '14ce00fd0f81340621299c3635753555eeef875e6ef30c0482fa36b53d2f8fdbbb6d031a'
    )

    const herosArray: Array<moviesModel> = []
    await api
      .get(
        `/series?ts=${ts}&apikey=6ef30c0482fa36b53d2f8fdbbb6d031a&hash=${hash}&limit=50&offset=15`
      )
      .then((response: AxiosResponse<any>) => {
        console.log(response.data.data.results)
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

        setMovies(herosArray)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <MoviesContext.Provider value={{ movies }}>
      {children}
    </MoviesContext.Provider>
  )
}

export default MoviesContext

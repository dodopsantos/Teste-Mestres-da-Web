import React, { createContext, useEffect, useState } from 'react'
import api from '../services/api'
import { Md5 } from 'ts-md5/dist/md5'
import { AxiosResponse } from 'axios'
import characterModel from '../models/character'

interface CharactersContextData {
  // getCharacters(user: string, password: string): Promise<void>
  characters: Array<characterModel>
}

const CharactersContext = createContext<CharactersContextData>(
  {} as CharactersContextData
)

export const CharactersProvider: React.FC = ({ children }) => {
  const [characters, setCharacters] = useState<Array<characterModel>>([])

  async function getCharacters() {
    const ts = Math.floor(Date.now() / 1000)
    const hash = Md5.hashStr(
      ts +
        '14ce00fd0f81340621299c3635753555eeef875e6ef30c0482fa36b53d2f8fdbbb6d031a'
    )

    const herosArray: Array<characterModel> = []
    await api
      .get(
        `/characters?ts=${ts}&apikey=6ef30c0482fa36b53d2f8fdbbb6d031a&hash=${hash}&limit=50&offset=1`
      )
      .then((response: AxiosResponse<any>) => {
        response.data.data.results.forEach((item: any) => {
          herosArray.push({
            id: item.id,
            image:
              item.thumbnail.path +
              '/portrait_uncanny.' +
              item.thumbnail.extension,
            name: item.name,
            description: item.description,
            series: item.series.items
          })
        })
        setCharacters(herosArray)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <CharactersContext.Provider value={{ characters }}>
      {children}
    </CharactersContext.Provider>
  )
}

export default CharactersContext

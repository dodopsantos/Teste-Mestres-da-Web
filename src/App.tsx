import React from 'react'
import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Routes from './routes'
import { AuthProvider } from './contexts/auth'
import { CharactersProvider } from './contexts/characters'
import { ComicsProvider } from './contexts/comics'
import { MoviesProvider } from './contexts/movies'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <CharactersProvider>
          <ComicsProvider>
            <MoviesProvider>
              <Routes />
            </MoviesProvider>
          </ComicsProvider>
        </CharactersProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App

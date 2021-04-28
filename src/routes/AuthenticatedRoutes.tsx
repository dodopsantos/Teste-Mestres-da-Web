import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from '../components/navBar'

import Home from '../pages/characters'
import HQs from '../pages/comics'
import Movies from '../pages/movies'

const AuthenticatedRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/comics" component={HQs} />
        <Route exact path="/movies" component={Movies} />
      </Switch>
    </BrowserRouter>
  )
}

export default AuthenticatedRoutes

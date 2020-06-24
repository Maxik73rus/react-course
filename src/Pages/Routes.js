import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PageDetail from './PageDetail/PageDetail'
import CssModulePage from './CssModulePage/CssModulePage'
import Page404 from './Page404/Page404'
import PageHome from './PageHome/PageHome'

function Routes () {
  return (
    <Switch>
      <Route exact path='/' component={PageHome} />
      <Route path='/detail' component={PageDetail} />
      <Route path='/css-module' component={CssModulePage} />
      <Route path='/page404' component={Page404} />
    </Switch>
  )
}
export default Routes
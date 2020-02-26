import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Page from '../Page'
import Search from '../Search'
import Sidebar from '../../components/Sidebar'
import Details from '../Details'
import { store } from '../../store/configureStore'
import { GlobalStyle } from '../../Global.styled'
import * as S from './App.styled'

function App () {
  return (
    <Fragment>
      <GlobalStyle/>
      <Provider store={store}>
        <S.Page>
          <Router>
            <S.Wrapper>
              <Sidebar/>
              <S.Content>
                <Switch>
                  <Redirect exact from='/' to='/discover'/>
                  <Route exact path='/discover' render={(props) => <Page {...props} title={'Discover'}/>}/>
                  <Route exact path='/top' render={(props) => <Page {...props} title="Top Rated Movies"/>}/>
                  <Route exact path='/latest' render={(props) => <Page {...props} title="Latest Movies"/>}/>
                  <Route exact path='/popular' render={(props) => <Page {...props} title="Popular Movies"/>}/>
                  <Route exact path='/upcoming' render={(props) => <Page {...props} title="Upcoming Movies"/>}/>
                  <Route exact path='/movies/:id' component={Details}/>
                  <Route exact path='/search' component={Search}/>
                </Switch>
              </S.Content>
            </S.Wrapper>
          </Router>
        </S.Page>
      </Provider>
    </Fragment>
  )
}

export default App

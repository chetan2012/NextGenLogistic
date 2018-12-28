import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
//import { IndexRoute } from 'react-router';
import App from '../App'
import PostList from '../containers/PostList'
import CreatePost from '../containers/CreatePost'
import Layout from '../layout/Layout'


const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <App>
      {/*<IndexRoute component={Layout} /> -- no longer available in react router v4*/} 
      <Route path="/" component={Layout} />
      <Route exact path="/create" component={CreatePost} />
      <Route exact path="/display" component={PostList} />
      <Route path="/sidebar" exact render={() => <h3>SideBar Page</h3>} />
      </App>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
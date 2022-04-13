import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Library from '../pages/Library'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Home' component={Home} />
            <Route path='/Library' component={Library} />
            <Route path='/Profile' component={Profile} />
            <Route path='/Settings' component={Settings} />
        </Switch>
    )
}

export default Routes
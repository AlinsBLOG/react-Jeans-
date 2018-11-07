import React from 'react'
import { HashRouter, Route, Switch} from 'react-router-dom' //Redirect
import Home from '../pages/home'
import Go from '../pages/home/go'

export default class AppRouter extends React.Component{
    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/go' component={Go} />
                </Switch>
            </HashRouter>
        );
    }
}
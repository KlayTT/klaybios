import React from 'react'
import { Route, Switch } from 'react-router-dom';

export default function Routes() {
    return (
        <>
            <Switch>
                <Route exact path="/" />
                <Route exact path="/about" />
                <Route exact path="/contact" />
                <Route exact path="/projects" />
            </Switch>  
        </>
    )
}

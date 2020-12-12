import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { About } from '../pages/About'
import { CalculatorIMC } from '../pages/CalculatorIMC'
import { Contact } from '../pages/Contact'
import { Home } from '../pages/Home'
import { PriceList } from '../pages/PriceList'
import { Team } from '../pages/Team'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/price-list">
                <PriceList />
            </Route>
            <Route path="/calculator-imc">
                <CalculatorIMC />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/team">
                <Team />
            </Route>
            <Route path="/about">
                <About />
            </Route>
        </Switch>
    )
}

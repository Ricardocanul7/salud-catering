import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { About } from '../pages/About'
import { BlogList } from '../pages/BlogList'
import { BlogPost } from '../pages/BlogPost'
import { CalculatorIMC } from '../pages/CalculatorIMC'
import { Contact } from '../pages/Contact'
import { FAQ } from '../pages/FAQ'
import { Home } from '../pages/Home'
import { Order } from '../pages/Order'
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
            <Route path="/blog">
                <BlogList />
            </Route>
            <Route path="/blogpost/:id">
                <BlogPost />
            </Route>
            <Route path="/faq">
                <FAQ />
            </Route>
            <Route path="/order">
                <Order />
            </Route>
        </Switch>
    )
}

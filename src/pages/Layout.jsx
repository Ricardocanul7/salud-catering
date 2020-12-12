import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Routes } from '../routes/Routes';
import '../styles/styles.scss';

export const Layout = () => {
    return (
        <Router>
            <div>
                <Navbar />

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes />


                <footer>
                    <div>
                        &copy; 2020 Salud Catering
                    </div>
                </footer>
            </div>
        </Router>
    )
}

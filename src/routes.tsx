import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Soda from './soda/Soda';

function Routes() {
    return (
        <>
            <header>
                <Header />
            </header>

            <main>
                <BrowserRouter>
                    <Route path='*' element={<Home />} />
                    <Route path='/soda' element={< Soda />} />
                </BrowserRouter>
            </main>
        </>
    );
}

export default Routes;

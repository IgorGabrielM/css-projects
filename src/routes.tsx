import React from 'react'
import { Route } from 'react-router-dom'
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
                    <Route path='*' element={<Home />} />
                    <Route path='/soda' element={< Soda />} />
               
            </main>
        </>
    );
}

export default Routes;

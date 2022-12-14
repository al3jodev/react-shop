import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Login from '@pages/Login';
import RecoveryPassword from '@containers/RecoveryPassword';
import Home from '@pages/Home';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import MyAccount from '@pages/MyAccount';
import CreateAccount from '@pages/CreateAccount';
import Checkout from '@pages/Checkout';
import Orders from '@pages/Orders';
import NotFound from '@pages/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '@styles/global.css'

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path='/' element={<Home />}></Route>
                        <Route exact path='/login' element={<Login />}></Route>
                        <Route exact path='/recovery-password' element={<RecoveryPassword />}></Route>
                        <Route exact path="/send-email" component={<SendEmail />} />
                        <Route exact path="/new-password" component={<NewPassword />} />
                        <Route exact path="/account" component={<MyAccount />} />
                        <Route exact path="/signup" component={<CreateAccount />} />
                        <Route exact path="/checkout" component={<Checkout />} />
                        <Route exact path="/orders" component={<Orders />} />
                        <Route path='*' element={<NotFound />}></Route>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
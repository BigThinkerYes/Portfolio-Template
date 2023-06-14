import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Directory from '../components/Directory';
import styled from 'styled-components';
import Chat from '../components/Chat';
import Home from '../components/Home';
import Loader from '../components/Loader';
import LoginBtn from '../components/LoginBtn';
import LogoutBtn from '../components/LogoutBtn';
import { useAuth0 } from '@auth0/auth0-react';
import Update from '../components/Update';

const FormWrapper = styled.div`
background-color: #c8d6e5;
height: 100vh;
width: 100vw;
display:flex;
align-items:center;
justify-content:center;
overflow-y: scroll;
button:hover{
    background-color: #fff;
    color: #ff6b6b;
}
`;

// const AppBody =styled.div`
// display: flex;
// height: 100vh;
// `

function Layout(){
    const { isLoading, error} = useAuth0();
    return(
        <>
        <Directory/>
        <FormWrapper>
            {error && <p>Authentication Error</p>}
            {!error && isLoading && <p>Loading...</p>}
            {!error && !isLoading && (
                <>
                <LoginBtn />
                <LogoutBtn />
                </>
            )}
            
            <React.Suspense fallback={<Loader active fullscreen={true} />}>
                <Outlet />
            </React.Suspense>

        </FormWrapper>
        </>
    )
}


export default createBrowserRouter([
    {
        path: '/',
        element:<Layout />,
        children: [
            {
                index: true,
                element:<Loader />
            },
            {
                path: '/',
                element:<Loader />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'chat',
                element: <Chat />
            },
            {
                path: '/:id',
                element: <Update />
            },
            
        ]
    }
])
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const Button = styled.button`
    margin: 0 auto;
    position: absolute;
    top: 20%;
    left: 50%;
    background-color: #ff6b6b;
    color #fff;
    padding: 10px 20px;
    border: none;
    font-weight: bold;
    transform: translate(-50%,-50%);
    text-align: center;
    cursor:pointer;
    `;


export default function LogoutBtn(){
    const { logout, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    function handleClick(){
        navigate('/');
    }

    return (
        
        isAuthenticated &&(
            <Button onClick={() => logout(handleClick)}>
                Sign Out
            </Button>
        )
        
    )
}
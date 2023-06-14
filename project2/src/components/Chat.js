import React, { useState } from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import supabase from '../db/supabaseClient';

const FormContainer = styled.div`
background-color: #c8d6e5;
height: 100vh;
width: 100vw;
display:flex;
align-items:center;
justify-content:center;
`;

const ChatBox  = styled.div`
border-radius: 20px;
>form{
    position: relative;
    display:flex;
    justify-content:center;
}
> form > input{

    position:fixed;
    left: 20%;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
}
>form > button{
    position: fixed;
    left: 53%;
    background-color: #222f3e;
    color: #fff;
    padding: 10px;
    font-weight: bold;
    height: 50px;
    border: none;
    cursor: pointer;
}
`;

const ChatLog = styled.div`
  /* Styles for chat log */
  position: relative;
  margin-top:70%;
  right: 50%;
`;

const MessageInput = styled.textarea`
  /* Styles for message input */
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: none;
  border-radius: 5px;
  position: fixed;
  left: 20%;
  width: 30%;
  border: 1px solid #ff6b6b;
  border-radius: 3px;
  padding: 20px;
  outline: none;
  box-shadow: 0 5px 20px;
`;

const SendButton = styled.button`
  /* Styles for send button */
  background-color: #576574;
  position: relative;
  right: auto;
  top: 10px;
  padding: 0.5rem 1rem;
  margin-right: 10px;
  color: #ff6b6b;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ErrorText = styled.p`
  /* Styles for error text */
  color: #ff6b6b;
`;
export default function Chat(){
    const navigate = useNavigate('');
    const [message, setMessage] = useState('');
    const [formError, setFormError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message){
            setFormError('please enter a message');
            return
        }

    const { data, error} = await supabase
        .from('chatMessage')
        .insert([{message}])
        .select()
    if (error){
        console.log(error);
        setFormError('please enter a message');
    }
    if (data){
        console.log(data);
        setFormError(null);
        navigate('/home');
    }

    }
    return(
     <>
     <FormContainer>
      <div className='page create'>
          <form onSubmit={handleSubmit}>
          <ChatBox>
          <MessageInput
          name=''
          id='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          cols={30}
          rows={10}
          placeholder='Enter your message (up to 3000 words)'
          />
          </ChatBox>
          <SendButton>post me</SendButton>
          <ChatLog>
          {formError && <ErrorText className="error">{formError}</ErrorText>}
          </ChatLog>
          </form>
      </div>
     </FormContainer>
     </>
    )
}
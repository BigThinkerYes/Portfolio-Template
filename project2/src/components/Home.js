import React, { useEffect, useState } from 'react';
import supabase from '../db/supabaseClient';
import styled from 'styled-components';
import Message from './Messages';

const FormWrapper = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: #c8d6e5;
`;

const Msgs = styled.div`

`;
const MsgsGrid = styled.div`

`;

const ImgSlider = styled.div`
position: releative;
width: 800px;
height: auto;
margin: 0px;
background: #fff;
padding: 15px;
border-radius: 10px;
`;

const Slide = styled.div`

`;

const Info = styled.div`

> h2{
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

`;

export default function Home(){
  const [fetchError, setFetchError] = useState(null);
  const [chatMessages, setChatMessages] = useState(null);

  const handleDelete =(id)=>{
    setChatMessages(prevMsgs => {
      return prevMsgs.filter(sm => sm.id !== id)
    })
  }

  useEffect(() => {
    const fetchMessages = async () => {
      const {data, error} = await supabase
      .from('chatMessage')
      .select()

      if (error){
        setFetchError('could not get messages')
        setChatMessages(null)
        console.log(error);
      }
      if (data){
        setChatMessages(data)
        setFetchError(null)
      }
    }
    fetchMessages()
  }, []);

    return(
     <>
        <FormWrapper>
        {fetchError && (<p>{fetchError}</p>)}
        <ImgSlider>
        <Slide>
          <Info>
            <h2>Posts</h2>
            {chatMessages && (
          <Msgs>
            <MsgsGrid>
            {chatMessages.map(chatMessaged => (
              <Message key={chatMessaged.id} chatMessaged={chatMessaged} onDelete={handleDelete} />
            ))}
            </MsgsGrid>
          </Msgs>
        )}
          </Info>
        </Slide>
        </ImgSlider>
        </FormWrapper>
     </>
    );
}
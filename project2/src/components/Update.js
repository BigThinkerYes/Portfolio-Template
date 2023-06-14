import supabase from '../db/supabaseClient';
import { useEffect, useState } from "react";
import { useParams , useNavigate} from "react-router-dom";
import styled from 'styled-components';

const FormContainer = styled.div`
background-color: #fff;
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
    background-color: #ff6b6b;
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
  background-color: #ff6b6b;
  position: relative;
  right: auto;
  top: 10px;
  padding: 0.5rem 1rem;
  margin-right: 10px;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ErrorText = styled.p`
  /* Styles for error text */
  color: #ff6b6b;
`;

export default function Update(){
    const { id } = useParams();
    const navigate = useNavigate();

    const [message, setMessage] = useState('');
    const [formError, setFormError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!message){
            setFormError('There is nothing to update.')
            return
        }
        const { data, error} = await supabase
        .from('chatMessage')
        .update({message})
        .eq('id', id)
        .select()
        
        if(error){
            console.log(error)
            setFormError('update info')
        }
        if(data){
            console.log(data)
            setFormError(null)
            navigate('/home')
        }
    }
    
    useEffect(()=>{
        const fetchMessage = async () => {
            const {data, error} = await supabase
            .from('chatMessage')
            .select()
            .eq('id', id)
            .single()

            if(error){
                navigate('/home', {replace: true})
            }
            if (data){
                setMessage(data.message)
                console.log(data);
            }
        }
        fetchMessage()
    }, [id, navigate])
    return (
        <FormContainer>
        <div className='update'>
            <form onSubmit={handleSubmit}>
            <ChatBox>
            <MessageInput
            name=''
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            cols={30}
            rows={10}
            
            />
            </ChatBox>
            <SendButton>Update me</SendButton>
            <ChatLog>
            {formError && <ErrorText className="error">{formError}</ErrorText>}
            </ChatLog>
            </form>
        </div>
       </FormContainer>
    )
}
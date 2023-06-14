import { Link } from "react-router-dom";
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import supabase from '../db/supabaseClient';
import styled from 'styled-components';

const Msg= styled.div`
color: #ff6b6b;
`;
const MsgBtn= styled(EditNoteIcon)`
color: #fff;
  margin-left: 10px;
  font-size: 1.2em;
  padding: 6px;
  background: #576574;
  border-radius: 50%;
  cursor: pointer;
`;
const MsgTrash= styled(DeleteIcon)`
color: #ff6b6b;
  margin-left: 10px;
  font-size: 1.2em;
  padding: 6px;
  background: #222f3e;
  border-radius: 50%;
  cursor: pointer;
`;
const Msgs = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`;

export default function Message({ chatMessaged, onDelete }){
   const handleDelete = async ()=>{
    const {data, error} = await supabase
    .from('chatMessage')
    .delete()
    .eq('id', chatMessaged.id)
    .select()

    if (error){
        console.log(error)
    }
    if(data){
        console.log(data)
        onDelete(chatMessaged.id)
    }
    }
    return(
        <div className="msgs">
           <h3><Msg>{chatMessaged.message}</Msg><Msgs>{chatMessaged.created_at}</Msgs></h3>
           <div className="buttons">
                <Link to={'/' + chatMessaged.id}>
                    <MsgBtn />
                </Link>
                <MsgTrash onClick={handleDelete} />
            </div>
        </div>
    )
}
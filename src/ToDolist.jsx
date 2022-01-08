import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

const ToDolist = (props) => {
  
    const [line , setLine]=useState(false);
    const cutIt = () =>{
       setLine(true);
    }

    return (
        <>
            <div className="todo_style">
                <DeleteIcon className="fa-times"         
                   onClick={cutIt} 
                />
                <li style={{textDecoration: line ? 'line-through' : 'none'}}>{props.text}</li>
            </div>
        </>
    );
}



//***************************** Remove list Item  from list when it will be Delete by user ************************


// const ToDolist = (props) => {
  
 
//     return (
//         <>
//             <div className="todo_style">
//                 <DeleteIcon className="fa-times" 
        
//                     onClick={()=>{
//                         props.onSelect(props.id);

//                         }
//                     }
//                 />
//                 <li>{props.text}</li>
//             </div>
//         </>
//     );
// }
export default ToDolist;
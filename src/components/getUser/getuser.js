import React,{ useState,useEffect} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import './getuser.css';


function Getuser() {
   
        const[posts, setPosts]= useState([])

    useEffect(() =>{
       axios.get('https://projeto-getech.herokuapp.com/user')
       .then((response)=>{
            setPosts(response.data)
       })
       .catch((error)=>{
        console.error(error)
        })
    },[])
  
    return (
    
       <> 
        {posts.map((post,key)=>{
            return(
                
             <div className='main-container'>   
          

           <Table striped bordered hover="sm">
        <thead>
          <tr>
            <th>     </th>
            <th>nome</th>
            <th>email</th>
            <th>contato</th>
            <th>interesse</th>
           
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td></td>
            <td>{post.nome}</td>
            <td>{post.email}</td>
            <td>{post.contato}</td>
            <td>{post.interesse}</td>
            
            
          </tr>
    
            </tbody>
            </Table>



           </div>
           
            )
           

      })}
      

      </>
  );
}

export default Getuser;
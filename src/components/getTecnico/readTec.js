import React,{ useState,useEffect} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import './readTec.css';


function Gettecnico() {
   
        const[posts, setPosts]= useState([])

    useEffect(() =>{
       axios.get('https://projeto-getech.herokuapp.com/tecnicos')
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
            <th>nome</th>
            <th>email</th>
            <th>contato</th>
            <th>Especialidade</th>
            <th>Estado</th>            
          </tr>
        </thead>
        <tbody>
          <tr>            
            <td>{post.nome}</td>
            <td>{post.email}</td>
            <td>{post.contato}</td>
            <td>{post.especialidade}</td>
            <td>{post.estado}</td>            
          </tr>
    
            </tbody>
            </Table>



           </div>
           
            )
           

      })}
      

      </>
  );
}

export default Gettecnico;
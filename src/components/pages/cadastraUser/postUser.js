import React from "react";
import {useForm} from "react-hook-form"
import "../cadastraUser/form.css"
import {useHistory, Link} from "react-router-dom"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";

const validationPost = yup.object().shape({
    nome:yup.string().required("nome é obrigatorio").min(5,"nome completo")   ,
    email:yup.string().required("email obrigatorio").email("email invalido")  ,
    contato:yup.number("numero de contato").required("contato obrigatorio"),
    interesse:yup.string().required("interesse obrigatorio"),
})

function Postuser() {
    let history = useHistory ()
    
    const { register, handleSubmit,   formState: { errors } } = useForm({
        resolver: yupResolver(validationPost)
    });
    const addPost= data => axios.post("https://projeto-getech.herokuapp.com/User",data)
    .then(() =>{
        console.log("deu tudo certo")
        history.push("/tecnlist")
    })
    .catch((error)=>{
        console.error(error)
    })


    return(
         <main>
            <div className="card-post">
               <h1>Criar Cadastro</h1>        
                <div className="line-post"></div> 

                <div className="card-body-post">

                    <form onSubmit={handleSubmit(addPost)}>
                        <div className="fields">
                            <label>Nome completo</label>
                            <input type="text" name="nome" {...register("nome")}/>
                            <p className="error-message">{errors.nome?.message}</p>
                            </div>

                            <div className="fields">
                            <label>Email</label>
                            <input type="text" name="email"{...register("email")}/>
                            <p className="error-message">{errors.email?.message}</p>
                            </div>


                            <div className="fields">
                            <label>Contato</label>
                            <input type="text" name="contato" {...register("contato")}/>
                            <p className="error-message">{errors.contato?.message}</p>
                            </div>

                            <div className="fields">
                            <label>Interesse</label>
                            <input type="text" name="interesse" {...register("interesse")}/>
                            <p className="error-message">{errors.contato?.message}</p>
                            </div>

                            <div className="btn-post">
                                <button type="submit">Criar Usuario</button>
                            </div>
                            <div className="btn-post">
                                <Link to="/tecnlist">
                                    <button>ja tem cadastro</button>
                                </Link>
                            </div>


                    </form>

                </div>

            </div>
         </main>
  )
}

export default Postuser
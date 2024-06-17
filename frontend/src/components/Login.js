import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authSlice } from "./authSlice";

export default function CreateUser(){

    const [logUserName, setLogUserName]=useState("");
    const [logPassword, setLogPassword]=useState("");

    const dispatch=useDispatch();
    const navigate = useNavigate();
    const [error,setError]=useState(false);

    const sendLogin=(e)=>{
        e.preventDefault();

        const loginUser={
            logUserName,
            logPassword
        }
         
        axios.post("http://localhost:8050/user/login",loginUser)
        .then((responce)=>{
            navigate('/home');
            alert("login success");
        }).catch((err)=>{
            alert("error with login");
        });
    }





    return(
        <div>
            <form onSubmit={sendLogin}>
            <div class="login">
                <label for="userName" class="form-label">User Name</label>
                <input type="text" class="form-control" id="userName" placeholder ="Enter Your User Name" onChange={(e)=>{
                    setLogUserName(e.target.value);
                }}/>
            </div>


            <div class="login">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder ="Enter Password" onChange={(e)=>{
                    setLogPassword(e.target.value);
                }}/>
            </div>

            <button type="submit" class="btn btn-primary">Login</button>
            </form>
            
        </div>
    )

}





















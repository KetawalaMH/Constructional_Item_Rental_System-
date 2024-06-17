import React, {useState} from "react";
import axios from "axios";

export default function CreateUser(){

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [contactNumber, setContactNumber] = useState("")

  async  function sendUserData(e){
        e.preventDefault();

        const newUser ={
            userName,
            password,
            contactNumber
        }

        axios.post("http://localhost:8050/user/add",newUser).then(()=>{
            alert("Account Created Succefully")
        }).catch((err)=>{
            alert("Error in creating account",err)
        })
    }



    return(
        <div>
            <form onSubmit={sendUserData}>
            <div class="createUserAccount">
                <label for="userName" class="form-label">User Name</label>
                <input type="text" class="form-control" id="userName" placeholder ="Enter A Email for User Name"
                onChange={(e)=>{
                setUserName(e.target.value);}}/>
            </div>

            <div class="createUserAccount">
                <label for="contactNumber" class="form-label">Contact Number</label>
                <input type="text" class="form-control" id="contactNumber" placeholder ="Enter Mobile Number"
                 onChange={(e)=>{
                    setPassword(e.target.value)}}/>
            </div>



            <div class="createUserAccount">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"
                onChange={(e)=>{
                    setContactNumber(e.target.value)}}/>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            
        </div>
    )

}





















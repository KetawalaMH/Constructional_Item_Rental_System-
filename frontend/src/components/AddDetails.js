import React, {useState} from "react";
import axios from "axios";
export default function AddDetails(){

    const [recieverName, setrecieverName]=useState("");
    const [recieveAddress,setrecieveAddress]=useState("");
    const [itemId,setitemId]=useState("");
    const [startDate, setstartDate]=useState("");
    const [endDate,setendDate]=useState("");


    function sendDataOrder(a){
        a.preventDefault();

        const newOrder={
            recieverName,
            recieveAddress,
            itemId,
            startDate,
            endDate

        }

        axios.post("http://localhost:8050/order/add",newOrder).then(()=>{
            alert("order added");
            console.log(itemId);
        }).catch((err)=>{
            alert("error with adding item");
        })
    }

    return(
        <div>
            <form onSubmit={sendDataOrder}>
            <div class="placeOrder">
                <label for="recieverName" class="form-label">Reciever Name</label>
                <input type="text" class="form-control" id="recieverName" placeholder ="Enter Name" onChange={(a)=>{
                    setrecieverName(a.target.value);
                }}/>
            </div>

            <div class="placeOrder">
                <label for="recieveAddress" class="form-label">Recieve Address</label>
                <input type="text" class="form-control" id="recieveAddress" placeholder ="Enter Delivery Address" onChange={(a)=>{
                    setrecieveAddress(a.target.value);
                }}/>
            </div>

            <div class="placeOrder">
                <label for="itemId" class="form-label">itemId</label>
                <input type="text" class="form-control" id="itemId" placeholder = "Copy the item id from the item details page" onChange={(a)=>{
                    setitemId(a.target.value);
                }}/>
            </div>

            <div class="placeOrder">
                <label for="startDate" class="form-label">Start Date</label>
                <input type="date" class="form-control" id="startDate" placeholder ="yyyy-mm-dd" onChange={(a)=>{
                    setstartDate(a.target.value);
                }}/>
            </div>

            <div class="placeOrder">
                <label for="endDate" class="form-label">End Date</label>
                <input type="date" class="form-control" id="endDate" placeholder ="yyyy-mm-dd" onChange={(a)=>{
                    setendDate(a.target.value);
                }}/>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            
        </div>
    )

}























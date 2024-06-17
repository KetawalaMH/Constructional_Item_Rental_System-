import React, {useState} from "react";
import axios from "axios";

export default function CreateItem(){

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [dailyRate, setDailyRate] = useState("")

  async  function sendItemData(Item){
        Item.preventDefault();

        const newItem ={
            name,
            description,
            dailyRate
        }

        axios.post("http://localhost:8050/item/add",newItem).then(()=>{
            alert("Item Added Succefully")
        }).catch((err)=>{
            alert("Error in adding account",err)
        })
    }



    return(
        <div>
            <form onSubmit={sendItemData}>
            <div class="createItem">
                <label for="name" class="form-label">Item Name</label>
                <input type="text" class="form-control" id="name" placeholder ="Enter Item Name"
                onChange={(Item)=>{
                    setName(Item.target.value);}}/>
            </div>

            <div class="createItem">
                <label for="description" class="form-label">Description</label>
                <input type="text" class="form-control" id="contactNumber" placeholder ="Enter Description on Item"
                 onChange={(Item)=>{
                    setDescription(Item.target.value)}}/>
            </div>



            <div class="createItem">
                <label for="dailyRate" class="form-label">Daily Rate</label>
                <input type="number" class="form-control" id="dailyRate"
                onChange={(Item)=>{
                    setDailyRate(Item.target.value)}}/>
            </div>

            <button type="submit" class="btn btn-primary">Add Item</button>
            </form>
            
        </div>
    )

}





















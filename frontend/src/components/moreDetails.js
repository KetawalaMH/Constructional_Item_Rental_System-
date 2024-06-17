import React from "react";
import Home from "./Home";
import { useParams } from "react-router-dom";

export default function moreDetails(){

    const {id}=useParams();

    const [item,setItem]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8050/item/view/:id")
        .then((response)=>response.json())
        .then((data)=>setItem(data))
});

    return(
        <body>
            <div class="container text-center">
                <div class="row">
                    <div class="col-sm-8">
                        {item.length !==0 ? item.map((g)=>(
                            <div><h1>{g?.name}</h1></div>
                        )) :<h1>loading</h1>}
                    </div>
                    
                </div>
                <div class="row">
                    <div class="col-sm">col-sm</div>
                    <div class="col-sm">col-sm</div>
                    
                </div>
                </div>
                <a href="/place-order"><button>Buy Now</button></a>
        </body>
    )

}
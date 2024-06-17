import React,{useState,useEffect} from "react";
import '../Style/image/background.jpg';
import ShowItem from "./ShowItem";
import axios from "axios";

export default function Home(){





    const [item,setItem]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8050/item/show-all")
        .then((response)=>response.json())
        .then((data)=>setItem(data))



        const Id = response._id;

        axios.post("http://localhost:8050/item/view/:responce._id")
    }

    )

    return(
        <body>
            <section className="home">
            
            </section>

            <section className="">
            <div class>
                <div class>
                    <div class>
                        <div>

                        </div>
                        <form onSubmit={}>
                            <div className="showItem">
                                {item.map((i)=>(
                                    <ShowItem
                                    name={i.name}
                                    description={i.description}
                                    dailyRate={i.dailyRate}
                                    id={i._id}

                                    
                                    />
                                ))



                                }
                                </div>
                        </form>

                        
                    </div>


                </div>
            </div>

            </section>

        </body>
    )

}
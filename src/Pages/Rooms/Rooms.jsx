import { useEffect, useState } from "react";
import Room from "./Room";

 

const Rooms = () => {
    const [rooms,setRooms]=useState([]);
   const [price,setPrice]=useState([]);
    useEffect(()=>{
        fetch('assingment-11-backend.vercel.app/rooms?sortField=price&&sortOrder)
        .then(res=>res.json())
        .then(data=>setRooms(data))
    },[])


    return (
       <div >
        <div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
         <select className="input input-bordered" onChange={(e)=>setPrice(e.target.value)} >
            <option value="asc"> Low to high</option>
            <option value="desc"> high to Low</option>
         </select>
        </div>
        </div>
         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
            {
                rooms.map(room=><Room  key={room.img} room={room} 
                    ></Room>)
            }
        </div>
       </div>
    );
};

export default Rooms;
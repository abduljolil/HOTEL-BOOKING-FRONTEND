import { useState } from "react";
import { useLoaderData } from "react-router-dom";
const Update = () => {
   const booking = useLoaderData();
   const [update,setUpdate]=useState([]);
   console.log(booking);
    
const handleUpdate = _id=>{
  console.log(_id);

    fetch(`https://assingment-11-three.vercel.app/booking/${_id}`,{
      method:'PATCH',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({update})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount > 0){
        Swal.fire({
          title: 'Update Success!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        const remaining = booking.filter(books=>books._id !== id);
        const updated = booking.find(bookings=> bookings._id === id);
        updated.status='confirm';
        const newBook =[updated,...remaining];
        setUpdate(newBook);
  
      }
    })
  }
    return (
        <div className="max-h-screen text-center"> 
          <p>NewDate:<input onChange={(e)=>setUpdate(e.target.value)} type="date" name=" date" required /></p>
          <button onClick={handleUpdate} className="btn btn-success">UpDate</button>
        </div>
    );
};

export default Update;
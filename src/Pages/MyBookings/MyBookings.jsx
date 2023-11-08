import { useEffect, useState } from "react";
import BookingNow from "./BookingNow";
import axios from "axios";
import Swal from "sweetalert2";
 

 

const MyBookings = () => {
   
    const [books,setBooks]= useState([]);
    const url ="assingment-11-backend.vercel.app/booking";
     useEffect(()=>{

      axios.get(url)
      .then(res=>{
        setBooks(res.data)
      })
     },[url])

     const handleDelete = id =>{
      Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`assingment-11-backend.vercel.app/booking/${id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            const remaining = books.filter(booking=> booking._id !== id);
            setBooks(remaining)
        })
       
      }
    })
    

}

const handleUpdate = id=>{
  fetch(`assingment-11-backend.vercel.app/booking/${id}`,{
    method:'PATCH',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify({status:'confirm'})
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
      const remaining = books.filter(books=>books._id !== _id);
      const updated = books.find(bookings=> bookings._id === _id);
      updated.status='confirm';
      const newBook =[updated,...remaining];
      setBooks(newBook);

    }
  })
}

    return (
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>reviwe</th>
              <th>OrderDelete</th>
              <th>OrderUpdate</th>
            </tr>
          </thead>
          <tbody>
           {books.map(book=><BookingNow  key={book._id} book={book} handleUpdate={handleUpdate} handleDelete={handleDelete} ></BookingNow>)}
          </tbody>
        
          
        </table>
      </div>
    );
};

export default MyBookings;
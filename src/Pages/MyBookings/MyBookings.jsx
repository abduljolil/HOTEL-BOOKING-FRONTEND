import { useEffect, useState } from "react";
import BookingNow from "./BookingNow";
import axios from "axios";
import Swal from "sweetalert2";
 

 

const MyBookings = () => {
    const [books,setBooks]= useState([]);
    const url ="https://assinment-server.vercel.app/booking";
     useEffect(()=>{

      axios.get(url)
      .then(res=>{
        setBooks(res.data)
      })
     },[url])

    

     const handleDelete = id =>{
      console.log(id);
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
        fetch(`https://assinment-server.vercel.app/booking/${id}`,{
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
              <th>Reviews</th>
              <th>OrderDelete</th>
              <th>OrderUpdate</th>
            </tr>
          </thead>
          <tbody>
           {books.map(book=><BookingNow  key={book._id} book={book}   handleDelete={handleDelete} ></BookingNow>)}
          </tbody>
        
          
        </table>
      </div>
    );
};

export default MyBookings;
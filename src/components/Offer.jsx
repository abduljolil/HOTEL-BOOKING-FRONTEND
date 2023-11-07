import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

 

const Offer = () => {
 
    const [offers,setOffers]=useState([]);


    useEffect(()=>{
        axios.get('http://localhost:5000/offer',)
        .then(res=>res.json())
        .then(data=>setOffers(data))
    },[])

    return (
      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {
                offers?.map(offer=><>
                  <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img src={offer.img}alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{offer.title}</h2>
          <p>{offer.description}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">FIND OUT MORE</button>
          </div>
        </div>
      </div>
                </>)
            }
        </div>
      </div>
    );
};

export default Offer;

 
  
 
import { useEffect } from "react";
import { useState } from "react";

 

const Offers = () => {
 
    const [offers,setOffers]=useState([]);
    


    useEffect(()=>{
         fetch('assingment-11-backend.vercel.app/offer')
        .then(res=>res.json())
        .then(data=>setOffers(data))
    },[])

    return (
      <div className=" bg-base-400 my-10">
        <h1 className=" text-center text-5xl py-10">PROMOTIONS & SPECIAL OFFERS</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {
                offers?.map(offer=><>
                  <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img data-aos="zoom-in" className=" w-full h-80" src={offer.img}alt="Shoes" /></figure>
        <div  data-aos="fade-up" className="card-body">
          <h2 className="card-title text-3xl font-semibold">{offer.title}</h2>
          <p className="text-xl">{offer.description}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-success">FIND OUT MORE</button>
          </div>
        </div>
      </div>
                </>)
            }
        </div>
      </div>
    );
};

export default Offers;
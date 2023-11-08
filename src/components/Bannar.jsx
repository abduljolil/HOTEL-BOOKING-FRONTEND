 

const Bannar = () => {
   return (
       <div data-aos="fade-down"  className="carousel w-full h-[600px]">
       <div id="slide1" className="carousel-item relative w-full">
         <img src='https://i.ibb.co/1ZF0ntB/lobby.jpg' className="w-full rounded-lg" />
         <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-10 bottom-1">
           <a href="#slide6" className="btn btn-circle hover:bg-orange-500 mr-5" >❮</a> 
           <a href="#slide2" className="btn btn-circle hover:bg-orange-500">❯</a>
         </div>
       </div> 
       <div id="slide2" className="carousel-item relative w-full">
         <img src='https://i.ibb.co/bH1mrxQ/deluxe-suite-bedroom-1.jpg' className="w-full rounded-lg" />
         <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-10 bottom-1">
           <a href="#slide1" className="btn btn-circle hover:bg-orange-500 mr-5" >❮</a> 
           <a href="#slide3" className="btn btn-circle hover:bg-orange-500">❯</a>
         </div>
       </div> 
       <div id="slide3" className="carousel-item relative w-full">
         <img src= 'https://i.ibb.co/94BxCXF/york-pool-dusk-ok.jpg' className="w-full rounded-lg" />
         <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-10 bottom-1">
           <a href="#slide2" className="btn btn-circle mr-5 hover:bg-orange-500" >❮</a> 
           <a href="#slide4" className="btn btn-circle hover:bg-orange-500">❯</a>
         </div>
       </div> 
       <div id="slide4" className="carousel-item relative w-full">
         <img src='https://i.ibb.co/qMMG0tD/yorkhotel-theatre9261-hdr.jpg' className="w-full rounded-lg" />
         <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-10 bottom-1">
           <a href="#slide3" className="btn btn-circle hover:bg-orange-500 mr-5" >❮</a> 
           <a href="#slide5" className="btn btn-circle hover:bg-orange-500">❯</a>
         </div>
       </div>
       <div id="slide5" className="carousel-item relative w-full">
         <img src='https://i.ibb.co/2vFjXnS/yorkhotel-wedding9323-hdr.jpg' className="w-full rounded-lg" />
         <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-10 bottom-1">
           <a href="#slide4" className="btn btn-circle hover:bg-orange-500 mr-5" >❮</a> 
           <a href="#slide6" className="btn btn-circle hover:bg-orange-500">❯</a>
         </div>
       </div>
       <div id="slide6" className="carousel-item relative w-full">
         <img src='https://i.ibb.co/6Dj58RM/white-rose-show-kitchen.jpg' className="w-full rounded-lg" />
         <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-10 bottom-1">
           <a href="#slide5" className="btn btn-circle hover:bg-orange-500 mr-5" >❮</a> 
           <a href="#slide1" className="btn btn-circle hover:bg-orange-500">❯</a>
         </div>
       </div>
     </div>
   );
};

export default Bannar;
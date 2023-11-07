 

const Featured = () => {
    return (
        <div className=" flex gap-5 my-10">
        <div className="w-1/2 grid justify-center items-center">
        <h1 className="text-5xl font-bold">Featured Rooms!</h1>
        <p className="py-3 text-xl">Luxurious suites feature opulent marble bathrooms, expansive living spaces, and stunning city views.
        Premium rooms offer plush bedding, ergonomic workstations, and complimentary access to the hotel's spa and fitness facilities.
       Executive accommodations showcase modern design, state-of-the-art technology, and personalized concierge services for an elevated stay experience.</p>
        <button className="btn btn-success">Get Started</button>
        </div>
        <div className=" w-1/2  ">
       <img className="rounded-lg" src="https://i.ibb.co/94BxCXF/york-pool-dusk-ok.jpg" />
       </div>
        </div>
    );
};

export default Featured;
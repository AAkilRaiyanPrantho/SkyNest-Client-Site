import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Apartment from "./Apartment";

const Apartments = () => {

  const {isPending, isError,error, data: apartments} = useQuery({
    queryKey: ['apartments'],
    queryFn: async() => {
      const res = await fetch('http://localhost:5000/apartments');
      return res.json();
    }
  })

  if(isPending){
    return <span className="loading loading-infinity loading-lg items-center justify-center mx-auto"></span>
  }

  if(isError){
    return <h1>Error: {error.message}</h1>
  }

  return (
    <div>
      <Helmet>
        <title>SkyNest || Apartments</title>
      </Helmet>

      <div className="carousel w-full lg:h-[800px]">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/K2YMQvb/Apartments-4.webp"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/zJbS0bg/Apartments-1.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/TWHrbRV/modern-dining-room-ideas-4147451-hero-d6333998f8b34620adfd4d99ac732586.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/QnV8QxL/Banner-Images-4.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
    {
      apartments.map((apartment) => (<Apartment key={apartment._id} apartment={apartment}></Apartment>))
    }
    </div>



    </div>
  );
};

export default Apartments;

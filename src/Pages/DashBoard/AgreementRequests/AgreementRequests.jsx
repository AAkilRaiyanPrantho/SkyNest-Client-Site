import { useQuery } from "@tanstack/react-query";
import Headings from "../../Shared/Headings/Headings";
import { Helmet } from "react-helmet";
import AgreementRequest from "./AgreementRequest";


const AgreementRequests = () => {
    const {isPending, isError,error, data: agreements} = useQuery({
        queryKey: ['agreements'],
        queryFn: async() => {
          const res = await fetch('https://programming-hero-assignment-12-server.vercel.app/agreements');
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
        <title>SkyNest || Dashboard</title>
      </Helmet>
      
      <Headings mainHeading={'Agreement Requests'} subHeading={'See All Pending Requests'}></Headings>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
    {/* {
      apartments.map((apartment) => (<Apartment key={apartment._id} apartment={apartment}></Apartment>))
    } */}
    {
        agreements.map((agreement) => (<AgreementRequest key={agreement._id} agreement={agreement}></AgreementRequest>))
    }
    </div>



    </div>
    );
};

export default AgreementRequests;
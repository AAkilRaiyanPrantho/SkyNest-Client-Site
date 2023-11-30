import { useQuery } from "@tanstack/react-query";
import Headings from "../../Shared/Headings/Headings";
import Announcement from "./Announcement";


const Announcements = () => {
    const {isPending, isError,error, data: announcements} = useQuery({
        queryKey: ['announcements'],
        queryFn: async() => {
          const res = await fetch('https://programming-hero-assignment-12-server.vercel.app/announcements');
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
            <Headings mainHeading={'All  Announcements'} subHeading={'Stay Updated with new announcements'}></Headings>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
    {
      announcements.map((announcement) => (<Announcement key={announcement._key} announcement={announcement}></Announcement>))
    }
    </div>
            
        </div>
    );
};

export default Announcements;
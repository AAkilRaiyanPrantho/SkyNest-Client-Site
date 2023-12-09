
import Headings from "../../Shared/Headings/Headings";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const MakeAnnouncements = () => {
    const axiosPublic = useAxiosPublic();

    const notify = () => toast("Announcement Added!");

    const handleCreateAnnouncements = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const details = form.details.value;
    const newAnnouncements = { title, details};
    console.log(newAnnouncements);

    const announcementInfo = {
        announcementTitle: title,
        announcementDetails: details,

      }
      axiosPublic.post('/announcements',announcementInfo)
      .then(res => {
        if(res.data.insertedId){
          console.log('Announcement Added to Database')
          notify();
        }
      })
      .catch(error => console.log(error))
    
  };
    return (
        <div>
           <Headings mainHeading={'Make An Announcement'} subHeading={'New Announcement'}></Headings>
           <form
                onSubmit={handleCreateAnnouncements}
                className="card-body w-96 backdrop-blur-lg"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Announcement Title</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Announcement Title"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Announcement Details</span>
                  </label>
                  <input
                    type="text"
                    name="details"
                    placeholder="Announcement Details"
                    className="input input-bordered"
                    required
                  />
                </div>
                

                <div className="form-control mt-6">
                  <button className="btn outline outline-[#ee4747] text-[#ee4747]">
                    Add Announcement
                  </button>
                  
                </div>
              </form>
              <ToastContainer position="top-right"  />
        </div>
    );
};

export default MakeAnnouncements;
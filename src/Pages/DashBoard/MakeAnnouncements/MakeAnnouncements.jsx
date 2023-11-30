import Swal from "sweetalert2";
import Headings from "../../Shared/Headings/Headings";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const MakeAnnouncements = () => {
    const axiosPublic = useAxiosPublic();

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
        if(res.data.insertedID){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You Request Has Been Saved",
                showConfirmButton: false,
                timer: 1500
              });
          
        }
      })
    
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
        </div>
    );
};

export default MakeAnnouncements;
import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

import Swal from 'sweetalert2'



const Apartment = ({ apartment }) => {
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext);

    const handleAgreement = () => {
        console.log(_id,apartmentImage,floorNo,blockName,apartmentNo,rent,user.email,user.displayName)

        const agreementInfo = {
            name: user.displayName,
            email: user.email,
            apartmentImage: apartmentImage,floorNo: floorNo,blockName: blockName,apartmentNo: apartmentNo,
            rent: rent,
            member: 'No'

          }
          axiosPublic.post('/agreements',agreementInfo)
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
    }
    const{
        _id,apartmentImage,floorNo,blockName,apartmentNo,rent
    } = apartment;
    // console.log(_id,apartmentImage,floorNo,blockName,apartmentNo,rent)
    return (
        <div>
           <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className="w-[400px] h-[300px]" src={apartmentImage} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Available To Rent</h2>
    <p>Floor No: {floorNo}</p>
    <p>Block Name: {blockName}</p>
    <p>Apartment No: {apartmentNo}</p>
    <p>Rent: {rent}</p>
    <div className="card-actions justify-end">
      <button onClick={handleAgreement} className="btn btn-primary">Agreement</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Apartment;
import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



const Apartment = ({ apartment }) => {
  const notify = () => toast('You Request Has Been Saved');

    // current date extraction
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;



    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext);

    const handleAgreement = () => {
        console.log(_id,apartmentImage,floorNo,blockName,apartmentNo,rent,user.email,user.displayName,formattedDate)

        const agreementInfo = {
            name: user.displayName,
            email: user.email,
            apartmentImage: apartmentImage,floorNo: floorNo,blockName: blockName,apartmentNo: apartmentNo,
            rent: rent,
            member: 'No',
            status: 'Pending',
            date:formattedDate

          }
          axiosPublic.post('/agreements',agreementInfo)
          .then(res => {
            if(res.data.insertedId){
              console.log('You Request Has Been Saved')
                notify();
            }
          })
          .catch(error => console.log(error))
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
      <ToastContainer position="top-right"  />
    </div>
  </div>
</div>
        </div>
    );
};

export default Apartment;
import { useContext } from "react";
import { AuthContext } from "../../AuthProviders/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="card lg:w-[800px] lg:card-side bg-yellow-50 shadow-xl">
        <figure className="w-1/3">
          <img src={user.photoURL} alt={user.displayName} />
        </figure>
        <div className="card-body w-2/3">
          
          {
            user.email === 'prantho98@gmail.com'?<>
            <h2 className="card-title text-2xl">{user.displayName}</h2>
          <h2 className="card-title text-xl">{user.email}</h2>
            
          </>
          :
          <>
          <p>
            Floor: NONE
          </p>
          <p>
            Block: NONE
          </p>
          <p>
            Room no: NONE
          </p>
          <p>
            Agreement accept date: NONE
          </p>
          </>
          }
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

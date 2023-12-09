import { useQuery } from "@tanstack/react-query";
import Headings from "../../Shared/Headings/Headings";

const ManageMembers = () => {
  const {
    isPending,
    isError,
    error,
    data: users,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://programming-hero-assignment-12-server.vercel.app/users"
      );
      return res.json();
    },
  });

  if (isPending) {
    return (
      <span className="loading loading-infinity loading-lg items-center justify-center mx-auto"></span>
    );
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }
  return (
    <div>
      <Headings
        mainHeading={"User List"}
        subHeading={"All Users Can Be Seen Here"}
      ></Headings>
      <h1 className="text-3xl text-center py-2 mb-4 outline-dotted">Total Users: {users.length}</h1>
      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>SI No.</th>
        <th>Name</th>
        <th>Email</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map( (user, index) => <tr key={user._id}>
            <td>{ index+1 }</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><button className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button></td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
    </div>
    
  );
};

export default ManageMembers;

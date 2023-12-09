import { useQuery } from "@tanstack/react-query";
import Headings from "../../Shared/Headings/Headings";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ManageCoupons = () => {

  // Posting part
  const axiosPublic = useAxiosPublic();

  const notify = () => toast("New Coupon Added!");

  const handleAddCoupons = (e) => {
    e.preventDefault();
    const form = e.target;
    const code = form.code.value;
    const discount = form.discount.value;
    const description = form.description.value;
    const newCoupon = { code, discount, description };
    console.log(newCoupon);

    const newCoupons = {
      code: code,
      percentage: discount,
      description: description,
    };
    axiosPublic
      .post("/coupons", newCoupons)
      .then((res) => {
        if (res.data.insertedId) {
          console.log("Coupon Added to Database");
          notify();
        }
      })
      .catch((error) => console.log(error));
  };

  // Reading Part
  const {
    isPending,
    isError,
    error,
    data: coupons,
  } = useQuery({
    queryKey: ["coupons"],
    queryFn: async () => {
      const res = await fetch("https://programming-hero-assignment-12-server.vercel.app/coupons");
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
        mainHeading={"All Coupons"}
        subHeading={"See All The Coupons"}
      ></Headings>
      <h1 className="text-3xl text-center py-2 mb-4 outline-dotted">
        Total Coupons Available: {coupons.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>SI No.</th>
              <th>Code</th>
              <th>Percentage</th>
              <th>Description</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon, index) => (
              <tr key={coupon._id}>
                <td>{index + 1}</td>
                <td>{coupon.code}</td>
                <td>{coupon.percentage}</td>
                <td>{coupon.description}</td>
                <td>
                  <button className="btn btn-circle btn-outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center">
        {/* <button
          className="btn btn-outline btn-secondary"
          onSubmit={handleAddCoupons}
        >
          Submit
        </button> */}
        <button
          className="btn my-4"
          onClick={() => document.getElementById('my_modal_5').showModal()}
        >
          Add New Coupon
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Coupon Form</h3>
            <p className="py-4">
              Fill the form to add new coupons
            </p>
            <div className="flex flex-col justify-center items-center">
              <form onSubmit={handleAddCoupons}>
              <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Coupon Code</span>
                  </label>
                  <input
                    type="text"
                    name="code"
                    placeholder="New Coupon Code"
                    className="input input-bordered"
                    required
                  />
                </div>
              <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Discount Percentage</span>
                  </label>
                  <input
                    type="text"
                    name="discount"
                    placeholder="Discount Percentage"
                    className="input input-bordered"
                    required
                  />
                </div>
              <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Coupon Description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Coupon Description"
                    className="input input-bordered"
                    required
                  />
                </div>
                <button
          className="btn btn-outline btn-secondary">
          Submit
        </button>
              </form>
            </div>
          </div>
        </dialog>
        <ToastContainer position="top-right" />
      </div>
    </div>
  );
};

export default ManageCoupons;

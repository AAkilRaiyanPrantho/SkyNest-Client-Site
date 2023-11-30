const AgreementRequest = ({ agreement }) => {
  const {
    _id,
    name,
    email,
    apartmentImage,
    floorNo,
    blockName,
    apartmentNo,
    rent,
    date
  } = agreement;

  console.log(
    _id,
    name,
    email,
    apartmentImage,
    floorNo,
    blockName,
    apartmentNo,
    rent,
    date
  );

  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img
            src={apartmentImage}
            alt="car!"
            className="w-full h-[300px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Email: {email}</p>
          <p>Floor No: {floorNo}</p>
          <p>Block Name: {blockName}</p>
          <p>Apartment No: {apartmentNo}</p>
          <p>Rent: {rent}</p>
          <p>Date Requested: {date}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-success">Accept Request</button>
            <button className="btn btn-error">Reject Request</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgreementRequest;

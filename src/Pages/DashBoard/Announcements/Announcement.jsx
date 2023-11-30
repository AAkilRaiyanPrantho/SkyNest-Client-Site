const Announcement = ({ announcement }) => {
  const { announcementTitle, announcementDetails } = announcement;
  console.log(announcementTitle, announcementDetails);
  return (
    <div>
      <div className="card w-96 bg-orange-500 text-white text-center">
        <div className="card-body">
          <h2 className="card-title">{announcementTitle}</h2>
          <p>{announcementDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;

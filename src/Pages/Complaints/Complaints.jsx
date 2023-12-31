import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Headings from '../Shared/Headings/Headings';


const Complaints = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_58evyjk', 'template_hpsly5t', form.current, '5VCRaFrOE2Q2Llkp_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <div>
      <div className="hero  bg-base-100 my-4">
        <div className="hero-content flex-col lg:flex-cols-reverse">
          <div className="text-center lg:text-left">
            <Headings mainHeading={'Got any complaints?'} subHeading={'Lets us know in the Form'}></Headings>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" ref={form} onSubmit={sendEmail}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  name="user_email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Questions</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Give your opinion or Ask us a Question"
                  name="message"
                  className="input input-bordered"
                  required
                />
              </div>
              
              <div className="form-control mt-6">
                <button className="btn btn-primary"><input type="submit" value="Send" /></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaints;
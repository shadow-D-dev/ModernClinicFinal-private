import add from "@/../public/AddIcon.svg";
import Image from "next/image";
import phone from "@/../public/PhoneIcon.svg";

export default function ContactUsMap() {
  return (
    <div className="bg-white  w-screen flex items-center justify-center  h-[1200px] xl:h-[1000px] ">
      <div className=" w-[1700px]  ">
        <div className="flex  flex-col xl:flex-row p-4">
          <div className="flex-1  flex justify-center items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4327882632365!2d72.8517152122491!3d19.044700052877054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c96a1ab9dd61%3A0x12cf87875a7fb76f!2sShribalaji%20Dental%20clinic!5e0!3m2!1sen!2sin!4v1729380854365!5m2!1sen!2sin"
              className="rounded-3xl w-96 h-96 xl:w-[700px] xl:h-[700px]"
            ></iframe>
          </div>
          {/* The form section is starting from here */}
          <div className="flex-1 xl:pr-4 xl:pt-4 pt-12">
            <div>
              <div className=" text-black">
                <p className="text-5xl font-bold flex flex-col xl:flex-row gap-4">
                  <span className="text-[#5e5eee] ">Book Your</span>
                  <span>Dental visit</span>
                </p>
                <p className="text-xl font-bold  text-gray-500 mt-10">
                  Fill out the form below to request your dental appointment.
                  We&apos;ll confirm your time and send you a reminder.
                </p>
              </div>
              <div className="flex flex-col xl:gap-10 gap-6 mt-12 text-black">
                <div className="flex  justify-start items-start gap-6 xl:gap-8">
                  {""}
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="border-[0.5px] border-gray-400 text-md xl:text-xl rounded-[50px] p-2 xl:p-4 flex-1"
                  />
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="border-[0.5px] border-gray-400 text-md xl:text-xl rounded-[50px] p-2 xl:p-4 flex-1"
                  />
                </div>
                <div className="flex  justify-start items-start gap-6 xl:gap-8">
                  {" "}
                  <input
                    type="text"
                    placeholder="Enter Your Location"
                    className="border-[0.5px] border-gray-400 text-md xl:text-xl rounded-[50px] p-2 xl:p-4 flex-1"
                  />
                  <input
                    type="text"
                    placeholder="Medical Record No."
                    className="border-[0.5px] border-gray-400 text-md xl:text-xl rounded-[50px] p-2 xl:p-4 flex-1"
                  />
                </div>
                <div className="flex  justify-start items-start gap-6 xl:gap-8">
                  <input
                    type="text"
                    placeholder="11/11/2024"
                    className="border-[0.5px] border-gray-400 text-md xl:text-xl rounded-[50px] p-2 xl:p-4 flex-1"
                  />
                  <input
                    type="text"
                    placeholder="11:11PM"
                    className="border-[0.5px] border-gray-400 text-md xl:text-xl rounded-[50px] p-2 xl:p-4 flex-1"
                  />
                </div>
              </div>
              <div className="mt-10">
                <p className="text-black text-xl xl:text-3xl font-bold">
                  Reason For Visit
                </p>
                <div className="flex flex-col xl:flex-row mt-6">
                  <label className="text-gray-600 text-lg xl:text-xl font-bold items-center flex gap-2 flex-1">
                    <input type="checkbox" className="accent-[#5e5eee]" />
                    {/* Later add styling to the checkbox as the size on the xl is small */}
                    <div>Routine CheckUp</div>
                  </label>
                  <label className="text-gray-600 text-lg xl:text-xl font-bold items-center flex gap-2 flex-1">
                    <input type="checkbox" className="accent-[#5e5eee]" />
                    <div>New Patient Visit </div>
                  </label>
                  <label className="text-gray-600 text-lg xl:text-xl font-bold items-center flex gap-2 flex-1">
                    <input type="checkbox" className="accent-[#5e5eee]" />
                    <div>Specific Concern </div>
                  </label>
                </div>
                <div className=" flex mt-8 gap-6">
                  <button className=" flex justify-center items-center gap-2 xl:gap-4 bg-[#5e5eee] rounded-[100px] p-2  xl:p-4 text-white text-md xl:text-xl font-plusJakarta font-bold">
                    Make An Appoitment
                    <Image
                      src={add}
                      alt="phoneicon"
                      className="h-4 w-4 xl:h-6 xl:w-6"
                    />
                  </button>
                  <button className=" flex gap-4 bg-[#5e5eee] rounded-[100px] p-2 xl:p-4 text-white text-xl font-bold">
                    <Image src={phone} alt="phoneicon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import add from "@/../public/AddIcon.svg";
import Image from "next/image";
import phone from "@/../public/PhoneIcon.svg";

export default function ContactUsMap() {
  return (
    <div className="bg-white  w-full flex justify-center ">
      <div className=" w-[1300px]  flex  flex-col lg:flex-row pb-12">
        <div className="flex-1  flex justify-center items-center ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4327882632365!2d72.8517152122491!3d19.044700052877054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c96a1ab9dd61%3A0x12cf87875a7fb76f!2sShribalaji%20Dental%20clinic!5e0!3m2!1sen!2sin!4v1729380854365!5m2!1sen!2sin"
            className="rounded-3xl h-96 w-96 lg:h-[90%] lg:w-[90%] "
            title="Map"
            role="Navigation"
          ></iframe>
        </div>
        {/* The form section is starting from here */}
        <div className="flex-1 flex flex-col  p-4">
          {" "}
          <div className=" text-black">
            <p className="text-5xl font-bold flex flex-col lg:flex-row gap-4">
              <span className="text-[#5e5eee] ">Book Your</span>
              <span>Dental visit</span>
            </p>
            <p className="text-xl font-bold  text-gray-500 mt-10">
              Fill out the form below to request your dental appointment.
              We&apos;ll confirm your time and send you a reminder.
            </p>
          </div>
          {/* Heading ends here*/}
          <div className="flex flex-col lg:gap-10 gap-6 mt-12 text-black ">
            <div className="flex justify-start items-start gap-6 lg:gap-8 flex-col sm:flex-row ">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="border-[0.5px] border-gray-400 text-md lg:text-xl rounded-[50px] p-3 lg:p-4 flex-1 w-full"
              />
              <input
                type="text"
                placeholder="Enter Your Email"
                className="border-[0.5px] border-gray-400 text-md lg:text-xl rounded-[50px] p-3 lg:p-4 flex-1 w-full"
              />
            </div>
            <div className="flex justify-start items-start gap-6 lg:gap-8 flex-col sm:flex-row ">
              <input
                type="text"
                placeholder="Enter Your Location"
                className="border-[0.5px] border-gray-400 text-md lg:text-xl rounded-[50px] p-3 lg:p-4 flex-1 w-full"
              />
              <input
                type="text"
                placeholder="Medical Record No."
                className="border-[0.5px] border-gray-400 text-md lg:text-xl rounded-[50px] p-3 lg:p-4 flex-1 w-full"
              />
            </div>
            <div className="flex justify-start items-start gap-6 lg:gap-8 flex-col sm:flex-row ">
              <input
                type="text"
                placeholder="Select date"
                className="border-[0.5px] border-gray-400 text-md lg:text-xl rounded-[50px] p-3 lg:p-4 flex-1 w-full"
              />
              <input
                type="text"
                placeholder="Select timing"
                className="border-[0.5px] border-gray-400 text-md lg:text-xl rounded-[50px] p-3 lg:p-4 flex-1 w-full"
              />
            </div>
          </div>
          <div className="mt-10">
            <p className="text-black text-xl lg:text-3xl font-bold">
              Reason For Visit
            </p>
            <div className="flex flex-col lg:flex-row mt-6">
              <label className="text-gray-600 text-lg lg:text-xl font-bold items-center flex gap-2 flex-1">
                <input type="checkbox" className="accent-[#5e5eee]" />
                {/* Later add styling to the checkbox as the size on the xl is small */}
                <div>Routine CheckUp</div>
              </label>
              <label className="text-gray-600 text-lg lg:text-xl font-bold items-center flex gap-2 flex-1">
                <input type="checkbox" className="accent-[#5e5eee]" />
                <div>New Patient Visit </div>
              </label>
              <label className="text-gray-600 text-lg lg:text-xl font-bold items-center flex gap-2 flex-1">
                <input type="checkbox" className="accent-[#5e5eee]" />
                <div>Specific Concern </div>
              </label>
            </div>
            <div className=" flex mt-8 gap-6 xs:flex-col justify-start items-center">
              <button className=" flex justify-center items-center gap-2 lg:gap-4 bg-[#5e5eee] rounded-[100px] p-2  lg:p-4 text-white text-md lg:text-xl font-plusJakarta font-bold xs:flex-col">
                Make An Appoitment
                <Image
                  src={add}
                  alt="phoneicon"
                  className="h-4 w-4 lg:h-6 lg:w-6"
                />
              </button>
              <button className=" flex gap-4 bg-[#5e5eee] rounded-[100px]  text-white text-xl font-bold w-12 h-12  justify-center items-center">
                <Image src={phone} alt="phoneicon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

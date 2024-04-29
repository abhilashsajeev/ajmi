import * as React from "react";

interface ContactInfoProps {
  phoneNumber: string;
  email: string;
  address: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  phoneNumber,
  email,
  address,
}) => {
  return (
    <div className="flex flex-col px-10 py-14 rounded-xl bg-slate-900 max-md:px-5 max-md:max-w-full">
      <h2 className="text-3xl font-semibold">Contact Information</h2>
      <p className="mt-6 text-lg text-stone-300">Write to us to connect</p>
      <div className="flex gap-5 mt-14 max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/df0d467df5ac4f889ae8a0edcf7321f55818c2a3af3bbdf3305200a646917200?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&"
          alt=""
          className="shrink-0 w-6 aspect-square"
        />
        <p className="flex-auto my-auto">{phoneNumber}</p>
      </div>
      <div className="flex gap-5 mt-12 whitespace-nowrap max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f33a12af71453b99485ac9031fecc220eb9409e1999afd1ffbb8eef1e6b8f8f2?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&"
          alt=""
          className="shrink-0 w-6 aspect-square"
        />
        <p className="flex-auto my-auto">{email}</p>
      </div>
      <div className="flex gap-5 mt-12 max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a95236edbb272ad63891b22868a195f09637d663fca1420ca3cc4475295718e?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&"
          alt=""
          className="shrink-0 self-start w-6 aspect-square"
        />
        <p className="flex-auto">{address}</p>
      </div>
      <h3 className="mt-16 text-xl uppercase leading-[50px] max-md:mt-10">
        Follow Us
      </h3>
      <div className="flex gap-5 justify-between items-start px-px mt-2.5 font-medium tracking-widest">
        <div className="flex flex-col self-end mt-7">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac05c640a03abd7cc70c784cc52e72cc1eb306ce607da342925d712caf0b3ae4?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&"
            alt=""
            className="self-center w-52 aspect-[10]"
          />
          <div className="flex gap-1.5 px-7 py-4 mt-12 border border-white border-solid max-md:px-5 max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/86f453d668bde739f4b7230ef7057a7d499b03e3d9b318ca1fc8e0b75f8a8fd3?apiKey=36488682b7c54f08ad6c54eaddd3e0a8&"
              alt=""
              className="shrink-0 aspect-square w-[26px]"
            />
            <span className="flex-auto my-auto">GOOGLE MAP</span>
          </div>
        </div>
        <div className="shrink-0 self-start rounded-full bg-stone-50 bg-opacity-10 h-[138px] w-[138px]"></div>
      </div>
    </div>
  );
};

interface ContactFormProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  message,
}) => {
  return (
    <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-base font-medium text-neutral-400 max-md:mt-10">
              <h2 className="text-3xl font-semibold text-black">
                Fill the form below
              </h2>
              <label htmlFor="firstName" className="mt-12 max-md:mt-10">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className=" w-full border border-solid border-neutral-400 fill-neutral-400 stroke-[1px] stroke-neutral-400"
                value={firstName}
                readOnly
              />
              <label htmlFor="email" className=" max-md:mt-10">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-solid border-neutral-400 fill-neutral-400 stroke-[1px] stroke-neutral-400"
                value={email}
                readOnly
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-16 text-base font-medium text-black max-md:mt-10">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-4 w-full border border-solid border-neutral-400 fill-neutral-400 stroke-[1px] stroke-neutral-400"
                value={lastName}
                readOnly
              />
              <label htmlFor="phoneNumber" className=" max-md">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className=" w-full border border-solid border-slate-900 fill-slate-900 stroke-[1px] stroke-slate-900"
                value={phoneNumber}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
      <fieldset>
        <legend className="mt-12 text-sm font-semibold leading-5 text-slate-900 max-md:mt-10 max-md:max-w-full">
          Select Subject?
        </legend>
        <div className="flex gap-5 self-start mt-5 text-base text-slate-900">
          <div className="flex flex-1 gap-2.5">
            <input
              type="radio"
              id="general"
              name="subject"
              value="general"
              className="shrink-0 self-start aspect-square w-[13px]"
            />
            <label htmlFor="general" className="flex-auto">
              General Inquiry
            </label>
          </div>
          <div className="flex flex-1 gap-2.5">
            <input
              type="radio"
              id="business"
              name="subject"
              value="business"
              className="shrink-0 self-start aspect-square w-[13px]"
            />
            <label htmlFor="business" className="flex-auto">
              Business Enquiry
            </label>
          </div>
        </div>
      </fieldset>
      <label
        htmlFor="message"
        className="mt-12 text-base font-medium text-neutral-400 max-md:mt-10 max-md:max-w-full"
      >
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={4}
        className="mt-3 w-full border border-solid border-neutral-400 fill-neutral-400 stroke-[1px] stroke-neutral-400 max-md:max-w-full"
        placeholder="Write your message.."
        value={message}
        readOnly
      ></textarea>
      <button
        type="submit"
        className="justify-center self-end px-8 py-3 mt-14 text-sm font-extrabold leading-5 text-white uppercase bg-red-600 tracking-[2px] max-md:px-5 max-md:mt-10"
      >
        send message
      </button>
    </div>
  );
};

const ContactUs: React.FC = () => {
  const contactInfo = {
    phoneNumber: "+968 24793741 / 24793712",
    email: "info@italianmodernkitchen.com",
    address: "132 Dartmouth Street Boston, Massachusetts 02156, Oman",
  };

  const contactFormData = {
    firstName: "",
    lastName: "Doe",
    email: "",
    phoneNumber: "+1 012 3456 789",
    message: "",
  };

  return (
    <div className="p-10 bg-white shadow-2xl max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center text-base text-white max-md:mt-10 max-md:max-w-full">
            <ContactInfo {...contactInfo} />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
          <ContactForm {...contactFormData} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

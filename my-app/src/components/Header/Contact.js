
import { useRef } from "react";

const Contact = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    console.log(data)

    fetch(
      "https://react-http-1a3d9-default-rtdb.firebaseio.com/userdetails.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Contact-type": "user/data",
        },
      }
    );

    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
  };

  return (
    <div className="p-6 pl-16 pr-16">
      <form className="p-6 rounded-lg font-bold shadow-lg bg-slate-200" onSubmit={submitHandler}>
        <div className="mb-6">
          <label
            htmlfor="name"
            className="block mb-2 text-gray-900 dark:text-white"
          >
            NAME :
          </label>
          <input
            type="name"
            ref={nameRef}
            className=" border border-gray-300  rounded-lg block w-full p-2.5 "
            placeholder="name"
            required
          />
        </div>
        <div class="mb-6">
          <label
            htmlfor="email"
            className="block mb-2 text-gray-900 dark:text-white"
          >
            EMAIL :
          </label>
          <input
            type="email"
            ref={emailRef}
            className=" border border-gray-300  rounded-lg block w-full p-2.5 "
            placeholder="email"
            required
          />
        </div>
        <div class="mb-6">
          <label
            htmlfor="phone_number"
            className="block mb-2 text-gray-900 dark:text-white"
          >
            PHONE NUMBER :
          </label>
          <input
            type="number"
            ref={phoneRef}
            className=" border border-gray-300  rounded-lg block w-full p-2.5 "
            placeholder="Enter Your Phone no."
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
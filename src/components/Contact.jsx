import React, { useState } from "react";
const Contact = () => {
  // emailjs.send(serviceID, templateID, inputData, publicKey);
  const [inputData, setData] = useState({
    Name: "",
    Age: "",
    Email: "",
    Password: "",
  });

  const inputControl = (e) => {
    const { name, value } = e.target;
    setData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
    setData({ Name: "", Age: "", Email: "", Password: "" });
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <header className="flex flex-col h-screen bg-slate-700">
        <section className="flex-grow-1 flex justify-center items-center h-screen">
          <div className="rounded-3">
            <h2 className="text-white font-bold">Register today</h2>
            <p className="text-white font-medium">Fill in the data below.</p>
            <form
              className="flex flex-col gap-3 w-full"
              onSubmit={handleSubmit}
            >
              <input
                onChange={inputControl}
                type="text"
                placeholder="Name"
                name="Name"
                className="p-2 rounded-md"
              />
              <input
                onChange={inputControl}
                type="email"
                placeholder="Email"
                name="Email"
                className="p-2 rounded-md"
              />
              <input
                onChange={inputControl}
                type="number"
                placeholder="Age"
                name="Age"
                className="p-2 rounded-md"
              />
              <div className="flex items-center">
                <input
                  onChange={inputControl}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="Password"
                  className="w-3/4 p-2 rounded-md"
                />
                <button
                  onClick={togglePasswordVisibility}
                  className="w-1/4 bg-white border-0 p-2 rounded-md"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </header>
    </>
  );
};

export default Contact;



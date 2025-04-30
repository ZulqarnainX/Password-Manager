import React from "react";
import { useRef, useState } from "react";

const Manager = () => {
  const ref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    let passwordArray;
    if(passwords){
      setpasswordArray(JSON.parse(passwords))
    }
    
  }, [])
  


  const showPassword = () => {
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png";
    } else {
      ref.current.src = "icons/eyecross.png";
    }
  };

  const savePassword = () => {
    console.log(form)
    passwordArray.push(form)
    
  };


  const handleChange = (e) => {
    setform({...form, [e.target.name]: e.target.value})
  }
  

  return (
    <>
      {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#4caf50_100%)]"></div>
      <div className="mycontainer">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-700">&lt;</span>
          <span className="text-white">Pass</span>
          <span className="text-green-700">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your own password manager
        </p>

        <div className="text-white flex flex-col p-4 gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            className="rounded-full border border-green-700 w-full p-4 py-1"
            type="text"
            name="site"
            id=""
            placeholder="Enter website URL"
          />
          <div className="flex w-full justify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              className="rounded-full border border-green-700 w-full p-4 py-1"
              type="text"
              name="username"
              id=""
              placeholder="Enter Username"
            />
            <div className="relative">
              <input
                value={form.password}
                onChange={handleChange}
                className="rounded-full border border-green-700 w-full p-4 py-1"
                type="text"
                name="password"
                id=""
                placeholder="Enter Password"
              />
              <span
                className="absolute right-[3px] top-[4px] cursor-pointer px-2"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-1"
                  src="icons/eye.png"
                  alt="eye"
                  width={26}
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="cursor-pointer text-black flex justify-center items-center bg-green-500 hover:bg-green-300 rounded-full px-6 py-2 w-fit gap-3 shadow-md shadow-gray-400/30"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;

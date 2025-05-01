import React from "react";
import { useRef, useState, useEffect } from "react";

const Manager = () => {
  const ref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png";
    } else {
      ref.current.src = "icons/eyecross.png";
    }
  };

  const savePassword = () => {
    setpasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
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

        <div className="passwords text-white">
          <h2 className="py-4 font-bold text-2xl">Your Passwords :</h2>
          <table className="table-auto text-white w-full overflow-hidden ">
            <thead className="bg-green-800">
              <tr>
                <th className="py-2">Song</th>
                <th className="py-2">Artist</th>
                <th className="py-2">Year</th>
              </tr>
            </thead>
            <tbody className="bg-[rgba(5,46,22,0.25)]">
              <tr>
                <td className="outline outline-[rgba(255,255,255,0.08)] backdrop-blur-sm py-2 text-center w-32">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td className="outline outline-[rgba(255,255,255,0.08)] backdrop-blur-sm py-2 text-center w-32">Malcolm Lockyer</td>
                <td className="outline outline-[rgba(255,255,255,0.08)] backdrop-blur-sm py-2 text-center w-32">1961</td>
              </tr>
              <tr>
                <td className="outline outline-[rgba(255,255,255,0.08)] backdrop-blur-sm py-2 text-center w-32">Witchy Woman</td>
                <td className="outline outline-[rgba(255,255,255,0.08)] backdrop-blur-sm py-2 text-center w-32">The Eagles</td>
                <td className="outline outline-[rgba(255,255,255,0.08)] backdrop-blur-sm py-2 text-center w-32">1972</td>
              </tr>
              <tr>
                <td className="outline outline-[rgba(255,255,255,0.08)] backdrop-blur-sm py-2 text-center w-32">Shining Star</td>
                <td className="outline outline-[rgba(255,255,255,0.08)] backdrop-blur-sm py-2 text-center w-32">Earth, Wind, and Fire</td>
                <td className="outline outline-[rgba(255,255,255,0.08)] backdrop-blur-sm py-2 text-center w-32">1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Manager;

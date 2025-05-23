import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import "react-toastify/dist/ReactToastify.css";

const Manager = ({ DarkMode, SetDarkMode }) => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    console.log("DarkMode changed:", DarkMode);
  }, [DarkMode]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const copyText = (text) => {
    toast("📌 Copied To Clipboard!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: DarkMode ? "dark" : "light",
      transition: Bounce,
    });
    navigator.clipboard.writeText(text);
  };

  const showPassword = () => {
    passwordRef.current.type = "text";
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password";
    } else {
      passwordRef.current.type = "text";
      ref.current.src = "icons/eyecross.png";
    }
  };

  const savePassword = () => {
    const { site, username, password } = form;

    // Check if any field is empty
    if (!site.trim() || !username.trim() || !password.trim()) {
      toast.error("⚠️ Please fill in all fields!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: DarkMode ? "dark" : "light",
        transition: Bounce,
      });
      return; // Stop further execution
    }

    const newEntry = { ...form, id: uuidv4() };
    const updatedArray = [...passwordArray, newEntry];
    setpasswordArray(updatedArray);
    localStorage.setItem("passwords", JSON.stringify(updatedArray));
    setform({ site: "", username: "", password: "" });

    toast("✅ Password Saved!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: DarkMode ? "dark" : "light",
      transition: Bounce,
    });
  };

  const deletePassword = (id) => {
    console.log("Deleting password with id : ", id);
    let c = confirm("Do you really want to delete this password ?");
    if (c) {
      setpasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );
      toast("🗑️ Password Deleted!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };
  const editPassword = (id) => {
    console.log("Editing password with id : ", id);
    setform(passwordArray.filter((i) => i.id === id)[0]);
    setpasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={DarkMode ? "dark" : "light"} // <--- Set theme dynamically here
        transition={Bounce}
      />
      {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#4caf50_100%)]"></div> */}
      {DarkMode ? (
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#575757_100%)]"></div>
      ) : (
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#9fccfa_40%,#0974f1_100%)]"></div>
      )}

      <div className="p-2 pt-7 mycontainer md:mycontainer2">
        <h1 className="text-4xl font-bold text-center">
          <span className={` ${DarkMode ? "text-green-700" : "text-black"} `}>
            &lt;
          </span>
          <span className="text-white">Pass</span>
          <span className={` ${DarkMode ? "text-green-700" : "text-black"} `}>
            OP/&gt;
          </span>
        </h1>
        <p
          className={`text-lg text-center
        ${DarkMode ? "text-[#595959]" : "text-black"}`}
        >
          Your own password manager
        </p>

        <div className="text-white flex flex-col p-4 gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            className={`rounded-full border w-full p-4 py-1 ${
              DarkMode
                ? "border-[#373737] shadow-[0_0_8px_2px_rgb(57_57_57_/_50%)]"
                : "text-black backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/40"
            }`}
            type="text"
            name="site"
            id="site"
            placeholder="Enter website URL"
          />
          <div className="flex flex-col md:flex-row w-full justify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              className={`rounded-full border w-full p-4 py-1 ${
                DarkMode
                  ? "border-[#373737] shadow-[0_0_8px_2px_rgb(57_57_57_/_50%)"
                  : "backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/40 text-black"
              }`}
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
            />
            <div className="relative">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                className={`rounded-full border w-full p-4 py-1 ${
                  DarkMode
                    ? "border-[#373737] shadow-[0_0_8px_2px_rgb(57_57_57_/_50%)]"
                    : "backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/40 text-black"
                }`}
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
              />
              <span
                className={`absolute right-[3px] top-[4px] cursor-pointer px-2 ${
                  DarkMode ? "" : "invert"
                }`}
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
            className={`cursor-pointer text-black flex justify-center items-center rounded-full px-6 py-2 w-fit gap-3 shadow-md shadow-gray-400/30 ${
              DarkMode
                ? "bg-green-500 hover:bg-green-300"
                : "bg-white hover:bg-gray-200"
            }`}
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Save
          </button>
        </div>

        <div className={`passwords ${DarkMode ? "text-white" : "text-black"}`}>
          <h2 className="py-4 font-bold text-2xl">Your Passwords :</h2>
          {passwordArray.length === 0 && <div>No Passwords to show</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto text-white w-full overflow-hidden ">
              <thead
                className={`${
                  DarkMode
                    ? "bg-[#6d6d6d30] shadow-[0_0_8px_2px_rgba(156,163,175,0.5)] border rounded px-4 py-2"
                    : "bg-black shadow-[0_0_8px_2px_rgba(156,163,175,0.5)] border rounded px-4 py-2"
                }`}
              >
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody
                className={`${DarkMode ? "bg-[#0000000f]" : "bg-[#406895]"}`}
              >
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="outline outline-[rgba(255,255,255,0.08)] backdrop-blur-sm py-2 text-center">
                        <div className="flex items-center justify-center">
                          <a href={item.site} target="_blank">
                            <span>{item.site}</span>
                          </a>
                          <div
                            className="lordiconcopy size-7 cursor-pointer brightness-10000 hidden lg:block"
                            onClick={() => {
                              copyText(item.site);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="outline outline-[rgba(255,255,255,0.08)] backdrop-blur-sm py-2 text-center">
                        <div className="flex items-center justify-center">
                          <span>{item.username}</span>
                          <div
                            className="lordiconcopy size-7 cursor-pointer brightness-10000 hidden lg:block"
                            onClick={() => {
                              copyText(item.username);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="outline outline-[rgba(255,255,255,0.08)] backdrop-blur-sm py-2 text-center">
                        <div className="flex items-center justify-center">
                          <span>{item.password}</span>
                          <div
                            className="lordiconcopy size-7 cursor-pointer brightness-10000 hidden lg:block"
                            onClick={() => {
                              copyText(item.password);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="outline outline-[rgba(255,255,255,0.08)] backdrop-blur-sm py-2 text-center">
                        <span
                          className="brightness-10000 cursor-pointer mx-1"
                          onClick={() => {
                            editPassword(item.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/gwlusjdu.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                        <span
                          className="brightness-10000 cursor-pointer mx-1"
                          onClick={() => {
                            deletePassword(item.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;

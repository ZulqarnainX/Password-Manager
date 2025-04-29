import React from "react";

const Manager = () => {
  return (
    <>
      {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#4caf50_100%)]"></div>




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
            className="rounded-full border border-green-700 w-full p-4 py-1"
            type="text"
            name=""
            id=""
          />
          <div className="flex w-full justify-between gap-8">
            <input
              className="rounded-full border border-green-700 w-full p-4 py-1"
              type="text"
              name=""
              id=""
            />
            <input
              className="rounded-full border border-green-700 w-full p-4 py-1"
              type="text"
              name=""
              id=""
            />
          </div>
          <button className="cursor-pointer text-black flex justify-center items-center bg-green-500 hover:bg-green-300 rounded-full px-4 py-2 w-fit">
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

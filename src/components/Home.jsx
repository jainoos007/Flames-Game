import React from "react";

const Home = () => {
  return (
    <div className="h-screen w-screen justify-center items-center flex  bg-gray-200">
      <div className="h-96 w-96 px-5 py-4 bg-blue-300 shadow-md">
        <form>
          <div className="flex justify-center">
            <h2 className="text-2xl text-yellow-200">F L A M E S</h2>
          </div>
          <div className="flex mt-5 mb-5">
            <label
              className=" text-blue-500 text-xl mr-3 font-bold"
              htmlFor="name1"
            >
              Name 1:
            </label>
            <input
              className="rounded-lg px-2"
              id="name1"
              type="text"
              placeholder="Enter the name"
            />
          </div>
          <div className="flex mt-5 mb-5">
            <label
              className=" text-blue-500 text-xl mr-3 font-bold"
              htmlFor="name2"
            >
              Name 2:
            </label>
            <input
              className="rounded-lg px-2"
              id="name2"
              type="text"
              placeholder="Enter the name"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-yellow-300 text-gray-700 font-semibold px-6 py-1 rounded-lg"
            >
              Find
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;

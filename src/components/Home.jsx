import React, { useState } from "react";

const Home = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      getFlame(name1, name2);
    }
  };

  const resetFlame = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  // Javascript program to implement FLAMES game
  // Function to find out the flames result
  const getFlame = (name1, name2) => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
    if (!name1 || !name2) {
      setResult("");
      alert("Please fill the blanks");
      return;
    }
    const ans = name1
      .toLowerCase()
      .split("") // take all characters in "name1", to compare
      .filter((c) => name2.toLowerCase().includes(c)) // keep only characters (in "name1") also found in "name2"
      .reduce(
        (result, c) => [
          result[0].replace(new RegExp(`${c}`, "g"), ""), // replace common characters in "name1"
          result[1].replace(new RegExp(`${c}`, "g"), ""), // replace common characters in "name2"
        ],
        [name1.toLowerCase(), name2.toLowerCase()]
      )
      .reduce((length, letters) => [length.shift() + letters.length], [0]) // determine length of characters left, after removal
      .map((length) => {
        const findStop = (flames, startAt) => {
          if (flames.length === 1) return flames; // stop, if one flame character is left
          const position = new Array(length)
            .fill(0) // move "length" number of times
            .reduce(
              (beginAt) => (beginAt + 1 > flames.length ? 1 : beginAt + 1),
              startAt - 1
            ); // determine where to stop, in one move
          flames.splice(position - 1, 1); // remove the "flame" character where we stopped
          return findStop(flames, position); // find the next stop
        };
        return findStop("FLAMES".split(""), 1)[0]; // begin finding stops
      })
      .map(
        (result) =>
          [
            "Friendship",
            "Love",
            "Affection",
            "Marriage",
            "Enemy",
            "Sibling",
          ].filter((flame) =>
            flame.toLowerCase().startsWith(result.toLowerCase())
          )[0] // present result in readable form
      )[0];
    setResult(ans);
  };

  return (
    <div className="h-screen w-screen justify-center items-center flex bg-[url('/src/assets/bg.jpg')] bg-cover bg-center ">
      <div className="h-96 w-fit  px-5 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md rounded-md opacity-80">
        <div>
          <div className="flex justify-center">
            <h2 className="font-serif text-4xl mb-5 underline">F L A M E S</h2>
          </div>
          <div className="flex mt-5 mb-5">
            <label
              className=" text-slate-800 text-1xl md:text-2xl mr-3 font-bold font-arial"
              htmlFor={name1}
            >
              Name 1:
            </label>
            <input
              className="rounded-lg px-2 border w-28 md:w-fit border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              id={name1}
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              type="text"
              placeholder="Enter the name"
              onKeyDown={handleKeyDown}
              required
            />
          </div>
          <div className="flex mt-5 mb-5">
            <label
              className=" text-slate-800 text-1xl md:text-2xl mr-3 font-bold font-arial"
              htmlFor={name2}
            >
              Name 2:
            </label>
            <input
              className="rounded-lg px-2 border w-28 md:w-fit border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              id={name2}
              value={name2}
              type="text"
              onChange={(e) => setName2(e.target.value)}
              placeholder="Enter the name"
              onKeyDown={handleKeyDown}
              required
            />
          </div>
          <div className="flex justify-center mt-10">
            <button
              className=" duration-500 ease-in-out bg-slate-800 text-sm md:text-md text-white font-mono font-semibold px-6 py-1 rounded-full shadow-md hover:bg-slate-900 active:bg-slate-600 active:transform active:translate-y-1 focus:outline-none focus:ring focus:ring-sky-400 mr-10"
              onClick={() => getFlame(name1, name2)}
            >
              Find
            </button>
            <button
              className="duration-500 ease-in-out bg-slate-800 text-sm md:text-md text-white font-mono font-semibold px-6 py-1 rounded-full shadow-md hover:bg-slate-900 active:bg-slate-600 active:transform active:translate-y-1 focus:outline-none focus:ring focus:ring-sky-400"
              onClick={() => resetFlame()}
            >
              Reset
            </button>
          </div>
        </div>
        {result && (
          <div>
            {isLoading ? (
              <div className="flex justify-center items-center mt-10">
                <div className="p-6 border-4 border-white border-t-transparent rounded-full w-8 h-8 animate-spin"></div>
              </div>
            ) : (
              <div className="flex justify-center mt-10 mx-9 text-5xl  bg-slate-300 py-4 px-2 rounded-xl">
                <h2 className="text-3xl md:text-md italic font-semibold font-serif animate-bounce">
                  {result}
                </h2>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

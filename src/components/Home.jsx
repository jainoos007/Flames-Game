import React, { useEffect, useState } from "react";

const Home = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  // Javascript program to implement FLAMES game
  // Function to find out the flames result
  const getFlame = (name1, name2) => {
    if (!name1 || !name2) {
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
      <div className="h-96 w-96 px-5 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md rounded-md opacity-80">
        <div>
          <div className="flex justify-center">
            <h2 className="font-serif text-4xl mb-5 underline">F L A M E S</h2>
          </div>
          <div className="flex mt-5 mb-5">
            <label
              className=" text-slate-800 text-2xl mr-3 font-bold font-mono"
              htmlFor={name1}
            >
              Name 1:
            </label>
            <input
              className="rounded-lg px-2"
              id={name1}
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              type="text"
              placeholder="Enter the name"
              required
            />
          </div>
          <div className="flex mt-5 mb-5">
            <label
              className=" text-slate-800 text-2xl mr-3 font-bold font-mono"
              htmlFor={name2}
            >
              Name 2:
            </label>
            <input
              className="rounded-lg px-2"
              id={name2}
              value={name2}
              type="text"
              onChange={(e) => setName2(e.target.value)}
              placeholder="Enter the name"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-yellow-300 text-gray-700 font-semibold px-6 py-1 rounded-full shadow-md"
              onClick={() => getFlame(name1, name2)}
            >
              Find
            </button>
          </div>
        </div>
        {result && (
          <div className="flex justify-center mt-12 text-5xl text-red-700 bg-slate-300 py-4 rounded-xl">
            <h2 className="italic font-semibold">{result}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import TweetCard from "../components/TweetCard";

const categories = [
  "Tech",
  "Programming",
  "JavaScript",
  "FrontEnd",
  "Web Development",
  "Cricket",
  "Lifestyle",
  "BackEnd",
  "Database",
  "DevOps",
  "Cloud",
  "Tip & Tricks",
];

export default function Home() {
  const [id, setId] = useState("");
  const [category, setCategory] = useState("");

  const [data, setData] = useState([
    {
      id: "1479877351181897734",
      category: "React",
    },
    {
      id: "1480048723077988355",
      category: "Lifestyle",
    },
    {
      id: "1479909522609086464",
      category: "JS",
    },
    {
      id: "1480043181425135618",
      category: "Programming",
    },
    {
      id: "1479783923899064323",
      category: "Cricket",
    },
  ]);

  const handleChange = (e) => {
    if (e.target.name == "id") {
      setId(e.target.value);
    } else {
      setCategory(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    console.log("Inside Submit");
    e.preventDefault();
    const newItem = { id, category };
    const newData = [...data, newItem];
    setData(newData);
  };

  console.log(data);

  return (
    <div className="container mx-auto w-4/5 pt-3">
      <header className="text-center py-5">
        <h2 className="mt-3 text-3xl">Tweets Marker</h2>
      </header>
      <div className="flex flex-wrap">
        <div className="w-full md:w-2/5 px-3">
          <input
            placeholder="Tweet ID"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="id"
            onChange={(e) => handleChange(e)}
            value={id}
          ></input>
        </div>
        <div className="w-full md:w-2/5  px-3">
          <div className="relative">
            <select
              id="category"
              name="category"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={category}
              onChange={(e) => handleChange(e)}
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/5 px-3">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-6 rounded focus:outline-none focus:shadow-outline"
            onClick={(e) => handleSubmit(e)}
          >
            Add
          </button>
        </div>
      </div>

      {/* A section with various categories which will sort the tweets */}
      <div className="mx-3 mt-3">
        {categories.map((item) => (
          <button
            key={item}
            className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-3 rounded focus:outline-none focus:shadow-outline mr-3 mb-3"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {data && data.map((item) => <TweetCard key={item.id} id={item.id} />)}
        </div>
      </div>
    </div>
  );
}

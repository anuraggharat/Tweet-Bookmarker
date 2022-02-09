import axios from "axios";
import React, { useState, useEffect } from "react";
import TweetCard from "../components/TweetCard";
import Router from "next/router";


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
const options =["All",...categories]
export default function Home({tweets}) {
  const [id, setId] = useState("");
  const [category, setCategory] = useState("Tech");
  const [selected,setSelected] = useState("")
  const [allTweets,setAllTweets] = useState(tweets)

 
  const handleChange = (e) => {
    if (e.target.name == "id") {
      setId(e.target.value);
    } else {
      setCategory(e.target.value);
    }
  };

  const handleSelection=(event)=>{
    console.log(event.target.innerHTML);
    const filteredTweets = tweets.filter(
      (item) => item.category == event.target.innerHTML
    );
    setAllTweets(filteredTweets)
  }

  console.log(allTweets);

  const handleSubmit = async(e) => {
    const body = { tweetid: id, category: category };
    try {
      const {data} = await axios.post(`/api/tweet`, body);
      console.log(data.message);
      Router.reload(window.location.pathname);
      
    } catch (error) { 
      alert(error)
      
    }

  };



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
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
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
        {options.map((item,index) => (
          <button
            key={index}
            className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-1 px-3 rounded focus:outline-none focus:shadow-outline mr-3 mb-3"
            onClick={(e)=>handleSelection(e)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {allTweets && allTweets.map((item) => <TweetCard key={item._id} id={item.tweetid} />)}
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  
  const res = await axios.get(`${process.env.API_URL}/api/tweet`)
  const {data} = res
  return{
    props:data
  }
}
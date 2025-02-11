import { grabAskingQuestions, grabGreaterOrLess } from "../../../Services/DataServices";
import { useState } from "react";
import { Link } from "react-router-dom";

const greaterThanOrLess = () => 
{
  const [userNum1, setUserNum1] = useState("");
  const [userNum2, setUserNum2] = useState("");
  const [response, setResponse] = useState("");

  const greaterThanOrLessData = async () => 
  {
    const data = await grabGreaterOrLess(userNum1, userNum2)
    setResponse(data)

  if (userNum1.trim() === "" || userNum2.trim() === "") 
    {
      return setResponse("Please make sure to fill out both fields");
    }
  };


  return (
    <>
      <div className="contianer mx-20">
        <section className="mt-20">
          <h2>
            Greater Or Less Than <hr className="inline-block w-[65%] border-3 m-4" />
          </h2>
          <h3 className="text-stone-500 italic mx-20 font-light">
            - an API endpoint that receives user input from two numbers and compares them to see which of the two or greater than or less than"
          </h3>
          <h2 className="flex justify-end">
            <hr className="inline-block w-[73%] border-3 mt-12 me-5 " />
            Mini Challenge 4
          </h2>
        </section>
      </div>

      {/* Form Box */}
    <div>
      <div className="container-flex mx-10 rounded-3xl bg-stone-1000 border-2 bg-stone-900 border-black flex flex-col items-center p-6 h-[600px] mt-14">
        <h3 className="text-5xl font-semibold mb-4 pt-16"> Enter your First number here</h3>
            <input type="text" id="input" value={userNum1} onChange={(e) => setUserNum1(e.target.value)} 
            placeholder="Enter your name" 
            className="w-64 p-2 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-600"/>

            <h3 className="text-5xl font-semibold mb-4 pt-14"> Enter your Second number here</h3>
            <input type="text" id="input" value={userNum2} onChange={(e) => setUserNum2(e.target.value)} 
            placeholder="Enter your name" 
            className="w-64 p-2 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-600"/>

            <h2 className="pt-10">{response} </h2>
            
            <button onClick={greaterThanOrLessData} className="bg-stone-700 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition">
              Submit
            </button>
      </div>

      <br />
      <br />
  </div>
    </>
  );
}

export default greaterThanOrLess;

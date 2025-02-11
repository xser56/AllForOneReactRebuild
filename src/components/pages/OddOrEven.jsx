import { useState } from "react";
import { grabOddOrEven } from "../../../Services/DataServices";

const OddOrEven = () => 
{
  const [userInput1, setInput1] = useState("");
  const [response, setResponse] = useState("");

  const oddOrEvenData = async () => 
  {
    const data = await grabOddOrEven(userInput1)
    setResponse(data)

    // if (userInput1.trim() === "")
    // {
    //   setResponse("Please enter a number");  
    // } 

  };

  return (
    <>
      <div className="contianer mx-20">
        <section className="mt-20">
          <h2>
            Odd Or Even <hr className="inline-block w-[75%] border-3 m-4" />
          </h2>
          <h3 className="text-stone-500 italic mx-20 font-light">
            - endpoint that that takes in an input and tells you if the number entered is odd or even.
          </h3>
          <h2 className="flex justify-end">
            <hr className="inline-block w-[73%] border-3 mt-12 me-5 " />
            Mini Challenge 6
          </h2>
        </section>
      </div>

      {/* Form Box */}
    <div>
      <div className="container-flex mx-10 rounded-3xl bg-stone-1000 border-2 bg-stone-900 border-black flex flex-col items-center p-6 h-[600px] mt-14">
        <h3 className="text-5xl font-semibold mb-4 pt-16"> Enter a number here</h3>

            <input type="text" id="input" value={userInput1} onChange={(e) => setInput1(e.target.value)} 
            placeholder="Enter your name" 
            className="w-64 p-2 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-stone-600"/>

            <h2 className="pt-10">{response}</h2>
            
            <button onClick={oddOrEvenData} className="bg-stone-700 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition">
              Submit
            </button>
      </div>

      <br />
      <br />
  </div>
    </>
  );
}

export default OddOrEven;
